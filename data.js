
const musicData = [

    {
        id: 1,
        type: "song",
        title: "Perfect",
        artist: "Ed Sheeran",
        level: "Beginner",
        key: "G",
        chords: ["G", "Em", "C", "D"],
        tags: ["pop", "guitar", "beginner"],
        description: "Simple beginner-friendly version.",
        content: `
Verse

G                 Em
I found a love for me

C                     D
Darling just dive right in

G                    Em
And follow my lead

C                     D
Well I found a girl
        `
    },

    {
        id: 2,
        type: "song",
        title: "Let Her Go",
        artist: "Passenger",
        level: "Beginner",
        key: "G",
        chords: ["G", "D", "Em", "C"],
        tags: ["pop", "acoustic", "guitar"],
        description: "Popular acoustic guitar song.",
        content: `
Verse

G
Well you only need the light

D
When it's burning low

Em
Only miss the sun

C
When it starts to snow
        `
    },

    {
        id: 3,
        type: "song",
        title: "Someone Like You",
        artist: "Adele",
        level: "Intermediate",
        key: "A",
        chords: ["A", "E", "F#m", "D"],
        tags: ["pop", "piano", "vocals"],
        description: "Chord arrangement for singers and musicians.",
        content: `
Verse

A
I heard that you're settled down

E
That you found a girl

F#m
And you're married now

D
I heard that your dreams came true
        `
    },

    {
        id: 4,
        type: "lesson",
        title: "Basic Guitar Chords",
        artist: "",
        level: "Beginner",
        key: "",
        chords: ["C", "G", "D", "A", "E"],
        tags: ["guitar", "chords", "beginner"],
        description: "Learn the five essential open guitar chords.",
        content: `
C Major
G Major
D Major
A Major
E Major

Practice switching between each chord slowly.

Start with:
C → G → Am → F

Then gradually increase your speed.
        `
    },

    {
        id: 5,
        type: "lesson",
        title: "Major Chord Progressions",
        artist: "",
        level: "Intermediate",
        key: "",
        chords: ["C", "F", "G", "Am"],
        tags: ["theory", "progressions"],
        description: "Introduction to common major chord progressions.",
        content: `
The I - IV - V progression is one of the
most common progressions in popular music.

Example in C:

I  = C
IV = F
V  = G

Try:

C → F → G → C
        `
    },

    {
        id: 6,
        type: "lesson",
        title: "Strumming Patterns",
        artist: "",
        level: "Beginner",
        key: "",
        chords: ["G", "C", "D", "Em"],
        tags: ["guitar", "strumming", "rhythm"],
        description: "Practice basic guitar strumming patterns.",
        content: `
Pattern 1

Down - Down - Down - Down

Pattern 2

Down - Down-Up - Up-Down-Up

Start slowly with a metronome.

Focus on keeping your hand movement
consistent.
        `
    },

    {
        id: 7,
        type: "song",
        title: "Stand By Me",
        artist: "Ben E. King",
        level: "Beginner",
        key: "G",
        chords: ["G", "Em", "C", "D"],
        tags: ["classic", "guitar", "beginner"],
        description: "Simple repeating chord progression.",
        content: `
Main Progression

G → Em → C → D

Repeat throughout most of the song.
        `
    },

    {
        id: 8,
        type: "song",
        title: "Hallelujah",
        artist: "Leonard Cohen",
        level: "Intermediate",
        key: "C",
        chords: ["C", "Am", "F", "G", "E7"],
        tags: ["classic", "acoustic"],
        description: "Classic acoustic arrangement.",
        content: `
Verse

C                 Am
Now I've heard there was a secret chord

C                 Am
That David played and it pleased the Lord

F                 G
But you don't really care for music

G                C
Do you?
        `
    }

];
