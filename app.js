function MusicApp() {

    return {

        // --------------------------------
        // DATA
        // --------------------------------

        items: [],

        search: "",

        filter: "all",

        selectedItem: null,

        showAddForm: false,


        // --------------------------------
        // FORM
        // --------------------------------

        form: {
            type: "song",
            title: "",
            artist: "",
            level: "Beginner",
            key: "",
            chords: "",
            tags: "",
            description: "",
            content: ""
        },


        // --------------------------------
        // INITIALIZE
        // --------------------------------

        init() {

            // Load local JSON-style data
            this.items = [...musicData];

            console.log(
                "Music library loaded:",
                this.items.length
            );

        },


        // --------------------------------
        // FILTERED DATA
        // --------------------------------

        get filteredItems() {

            let result = [...this.items];


            // Type filter
            if (this.filter !== "all") {

                result = result.filter(
                    item => item.type === this.filter
                );

            }


            // Search
            const query = this.search
                .trim()
                .toLowerCase();


            if (query) {

                result = result.filter(item => {

                    const searchableText = [

                        item.title,

                        item.artist,

                        item.description,

                        item.type,

                        item.level,

                        item.key,

                        ...(item.chords || []),

                        ...(item.tags || [])

                    ]
                    .join(" ")
                    .toLowerCase();


                    return searchableText.includes(query);

                });

            }


            return result;

        },


        // --------------------------------
        // FILTER TITLE
        // --------------------------------

        get filterTitle() {

            if (this.filter === "song") {
                return "Songs";
            }

            if (this.filter === "lesson") {
                return "Lessons";
            }

            return "All Music";

        },


        // --------------------------------
        // OPEN ITEM
        // --------------------------------

        openItem(item) {

            this.selectedItem = item;

        },


        // --------------------------------
        // CLOSE ITEM
        // --------------------------------

        closeItem() {

            this.selectedItem = null;

        },


        // --------------------------------
        // RESET SEARCH
        // --------------------------------

        resetSearch() {

            this.search = "";

            this.filter = "all";

        },


        // --------------------------------
        // CLOSE ADD FORM
        // --------------------------------

        closeAddForm() {

            this.showAddForm = false;

        },


        // --------------------------------
        // ADD ITEM
        // --------------------------------

        addItem() {

            /*
             * Dummy form action.
             *
             * Currently this only adds the item
             * to the client-side array.
             *
             * Later this function can send the
             * data to an API / Google Sheet.
             */


            const newItem = {

                id: Date.now(),

                type: this.form.type,

                title: this.form.title,

                artist: this.form.artist,

                level: this.form.level,

                key: this.form.key,

                chords: this.form.chords
                    .split(",")
                    .map(chord => chord.trim())
                    .filter(Boolean),

                tags: this.form.tags
                    .split(",")
                    .map(tag => tag.trim())
                    .filter(Boolean),

                description: this.form.description,

                content: this.form.content

            };


            // Add to local data
            this.items.unshift(newItem);


            console.log(
                "New item:",
                newItem
            );


            // Future API call could be:
            //
            // await fetch("/api/music", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(newItem)
            // });


            alert(
                "Demo item added successfully.\n\n" +
                "Currently it is stored only in browser memory."
            );


            // Reset form
            this.resetForm();


            // Close modal
            this.showAddForm = false;

        },


        // --------------------------------
        // RESET FORM
        // --------------------------------

        resetForm() {

            this.form = {

                type: "song",

                title: "",

                artist: "",

                level: "Beginner",

                key: "",

                chords: "",

                tags: "",

                description: "",

                content: ""

            };

        },


        // --------------------------------
        // JSON FETCH EXAMPLE
        // --------------------------------

        async loadFromJSON() {

            /*
             * Example for when music-data.json
             * becomes a separate file.
             */

            try {

                const response =
                    await fetch("music-data.json");


                if (!response.ok) {
                    throw new Error(
                        "Unable to load JSON"
                    );
                }


                const data =
                    await response.json();


                this.items = data;


                console.log(
                    "Loaded from JSON:",
                    data.length
                );


            } catch (error) {

                console.error(
                    "JSON loading error:",
                    error
                );

            }

        },


        // --------------------------------
        // GOOGLE SHEETS FETCH EXAMPLE
        // --------------------------------

        async loadFromGoogleSheet() {

            /*
             * DUMMY GOOGLE SHEETS FUNCTION
             *
             * A Google Sheet can be published as CSV.
             *
             * Example:
             *
             * https://docs.google.com/spreadsheets/d/
             * SHEET_ID/export?format=csv
             *
             * Replace SHEET_ID with your actual ID.
             */


            const sheetId = "YOUR_GOOGLE_SHEET_ID";


            const url =
                `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;


            try {

                const response =
                    await fetch(url);


                if (!response.ok) {
                    throw new Error(
                        "Unable to fetch Google Sheet"
                    );
                }


                const csv =
                    await response.text();


                console.log(
                    "Google Sheet CSV:",
                    csv
                );


                /*
                 * CSV needs to be converted into
                 * JavaScript objects here.
                 *
                 * For production you could use
                 * a CSV parser such as Papa Parse.
                 */


                const rows =
                    this.parseCSV(csv);


                this.items = rows.map(
                    (row, index) => ({

                        id: index + 1,

                        type: row.type || "song",

                        title: row.title || "",

                        artist: row.artist || "",

                        level: row.level || "Beginner",

                        key: row.key || "",

                        chords: row.chords
                            ? row.chords
                                .split(",")
                                .map(x => x.trim())
                            : [],

                        tags: row.tags
                            ? row.tags
                                .split(",")
                                .map(x => x.trim())
                            : [],

                        description:
                            row.description || "",

                        content:
                            row.content || ""

                    })
                );


            } catch (error) {

                console.error(
                    "Google Sheet error:",
                    error
                );

            }

        },


        // --------------------------------
        // SIMPLE CSV PARSER
        // --------------------------------

        parseCSV(csv) {

            const lines =
                csv.trim().split("\n");


            if (lines.length < 2) {
                return [];
            }


            const headers =
                lines[0]
                    .split(",")
                    .map(header =>
                        header.trim()
                    );


            return lines
                .slice(1)
                .map(line => {

                    const values =
                        line.split(",");


                    const row = {};


                    headers.forEach(
                        (header, index) => {

                            row[header] =
                                values[index]
                                    ? values[index].trim()
                                    : "";

                        }
                    );


                    return row;

                });

        }

    };

}


// Start Petite Vue
PetiteVue
    .createApp()
    .mount();