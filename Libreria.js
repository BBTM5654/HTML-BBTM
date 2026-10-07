const libros = [
{titulo:"Cien años de soledad",autor:"Gabriel García Márquez",genero:"Literatura y narrativa"},
{titulo:"El amor en los tiempos del cólera",autor:"Gabriel García Márquez",genero:"Literatura y narrativa"},
{titulo:"Crónica de una muerte anunciada",autor:"Gabriel García Márquez",genero:"Literatura y narrativa"},
{titulo:"El otoño del patriarca",autor:"Gabriel García Márquez",genero:"Literatura y narrativa"},
{titulo:"Pedro Páramo",autor:"Juan Rulfo",genero:"Literatura y narrativa"},
{titulo:"Rayuela",autor:"Julio Cortázar",genero:"Literatura y narrativa"},
{titulo:"Ficciones",autor:"Jorge Luis Borges",genero:"Literatura y narrativa"},
{titulo:"El Aleph",autor:"Jorge Luis Borges",genero:"Literatura y narrativa"},
{titulo:"La casa de los espíritus",autor:"Isabel Allende",genero:"Literatura y narrativa"},
{titulo:"Como agua para chocolate",autor:"Laura Esquivel",genero:"Literatura y narrativa"},
{titulo:"La ciudad y los perros",autor:"Mario Vargas Llosa",genero:"Literatura y narrativa"},
{titulo:"Conversación en La Catedral",autor:"Mario Vargas Llosa",genero:"Literatura y narrativa"},
{titulo:"Don Quijote de la Mancha",autor:"Miguel de Cervantes",genero:"Literatura y narrativa"},
{titulo:"La sombra del viento",autor:"Carlos Ruiz Zafón",genero:"Literatura y narrativa"},
{titulo:"El juego del ángel",autor:"Carlos Ruiz Zafón",genero:"Literatura y narrativa"},
{titulo:"La tregua",autor:"Mario Benedetti",genero:"Literatura y narrativa"},
{titulo:"Gracias por el fuego",autor:"Mario Benedetti",genero:"Literatura y narrativa"},
{titulo:"La insoportable levedad del ser",autor:"Milan Kundera",genero:"Literatura y narrativa"},
{titulo:"Ensayo sobre la ceguera",autor:"José Saramago",genero:"Literatura y narrativa"},
{titulo:"La peste",autor:"Albert Camus",genero:"Literatura y narrativa"},
{titulo:"La metamorfosis",autor:"Franz Kafka",genero:"Literatura y narrativa"},
{titulo:"El proceso",autor:"Franz Kafka",genero:"Literatura y narrativa"},
{titulo:"Crimen y castigo",autor:"Fiódor Dostoyevski",genero:"Literatura y narrativa"},
{titulo:"Los hermanos Karamázov",autor:"Fiódor Dostoyevski",genero:"Literatura y narrativa"},
{titulo:"Anna Karénina",autor:"León Tolstói",genero:"Literatura y narrativa"},
{titulo:"Guerra y paz",autor:"León Tolstói",genero:"Literatura y narrativa"},
{titulo:"Madame Bovary",autor:"Gustave Flaubert",genero:"Literatura y narrativa"},
{titulo:"Los miserables",autor:"Victor Hugo",genero:"Literatura y narrativa"},
{titulo:"El extranjero",autor:"Albert Camus",genero:"Literatura y narrativa"},
{titulo:"Orgullo y prejuicio",autor:"Jane Austen",genero:"Literatura y narrativa"},
{titulo:"Jane Eyre",autor:"Charlotte Brontë",genero:"Literatura y narrativa"},
{titulo:"Cumbres borrascosas",autor:"Emily Brontë",genero:"Literatura y narrativa"},
{titulo:"Moby Dick",autor:"Herman Melville",genero:"Literatura y narrativa"},
{titulo:"El gran Gatsby",autor:"F. Scott Fitzgerald",genero:"Literatura y narrativa"},
{titulo:"Las uvas de la ira",autor:"John Steinbeck",genero:"Literatura y narrativa"},
{titulo:"El retrato de Dorian Gray",autor:"Oscar Wilde",genero:"Literatura y narrativa"},
{titulo:"La montaña mágica",autor:"Thomas Mann",genero:"Literatura y narrativa"},
{titulo:"Ulises",autor:"James Joyce",genero:"Literatura y narrativa"},
{titulo:"En busca del tiempo perdido",autor:"Marcel Proust",genero:"Literatura y narrativa"},
{titulo:"El nombre de la rosa",autor:"Umberto Eco",genero:"Literatura y narrativa"},

{titulo:"El principito",autor:"Antoine de Saint-Exupéry",genero:"Infantil y juvenil"},
{titulo:"Alicia en el país de las maravillas",autor:"Lewis Carroll",genero:"Infantil y juvenil"},
{titulo:"A través del espejo",autor:"Lewis Carroll",genero:"Infantil y juvenil"},
{titulo:"Charlie y la fábrica de chocolate",autor:"Roald Dahl",genero:"Infantil y juvenil"},
{titulo:"Matilda",autor:"Roald Dahl",genero:"Infantil y juvenil"},
{titulo:"Las brujas",autor:"Roald Dahl",genero:"Infantil y juvenil"},
{titulo:"El gran gigante bonachón",autor:"Roald Dahl",genero:"Infantil y juvenil"},
{titulo:"James y el melocotón gigante",autor:"Roald Dahl",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y la piedra filosofal",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y la cámara secreta",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y el prisionero de Azkaban",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y el cáliz de fuego",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y la Orden del Fénix",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y el misterio del príncipe",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"Harry Potter y las reliquias de la Muerte",autor:"J. K. Rowling",genero:"Infantil y juvenil"},
{titulo:"El león, la bruja y el ropero",autor:"C. S. Lewis",genero:"Infantil y juvenil"},
{titulo:"El príncipe Caspian",autor:"C. S. Lewis",genero:"Infantil y juvenil"},
{titulo:"La travesía del Viajero del Alba",autor:"C. S. Lewis",genero:"Infantil y juvenil"},
{titulo:"La silla de plata",autor:"C. S. Lewis",genero:"Infantil y juvenil"},
{titulo:"El caballo y el muchacho",autor:"C. S. Lewis",genero:"Infantil y juvenil"},
{titulo:"Momo",autor:"Michael Ende",genero:"Infantil y juvenil"},
{titulo:"La historia interminable",autor:"Michael Ende",genero:"Infantil y juvenil"},
{titulo:"Coraline",autor:"Neil Gaiman",genero:"Infantil y juvenil"},
{titulo:"El libro del cementerio",autor:"Neil Gaiman",genero:"Infantil y juvenil"},
{titulo:"Percy Jackson y el ladrón del rayo",autor:"Rick Riordan",genero:"Infantil y juvenil"},
{titulo:"Percy Jackson y el mar de los monstruos",autor:"Rick Riordan",genero:"Infantil y juvenil"},
{titulo:"Percy Jackson y la maldición del titán",autor:"Rick Riordan",genero:"Infantil y juvenil"},
{titulo:"Percy Jackson y la batalla del laberinto",autor:"Rick Riordan",genero:"Infantil y juvenil"},
{titulo:"Percy Jackson y el último héroe del Olimpo",autor:"Rick Riordan",genero:"Infantil y juvenil"},
{titulo:"Los juegos del hambre",autor:"Suzanne Collins",genero:"Infantil y juvenil"},
{titulo:"En llamas",autor:"Suzanne Collins",genero:"Infantil y juvenil"},
{titulo:"Sinsajo",autor:"Suzanne Collins",genero:"Infantil y juvenil"},
{titulo:"Divergente",autor:"Veronica Roth",genero:"Infantil y juvenil"},
{titulo:"Insurgente",autor:"Veronica Roth",genero:"Infantil y juvenil"},
{titulo:"Leal",autor:"Veronica Roth",genero:"Infantil y juvenil"},
{titulo:"Bajo la misma estrella",autor:"John Green",genero:"Infantil y juvenil"},
{titulo:"Ciudades de papel",autor:"John Green",genero:"Infantil y juvenil"},
{titulo:"Buscando a Alaska",autor:"John Green",genero:"Infantil y juvenil"},
{titulo:"Wonder",autor:"R. J. Palacio",genero:"Infantil y juvenil"},
{titulo:"El hogar de Miss Peregrine para niños peculiares",autor:"Ransom Riggs",genero:"Infantil y juvenil"},

{titulo:"Breve historia del tiempo",autor:"Stephen Hawking",genero:"Ciencia y tecnología"},
{titulo:"El universo en una cáscara de nuez",autor:"Stephen Hawking",genero:"Ciencia y tecnología"},
{titulo:"Cosmos",autor:"Carl Sagan",genero:"Ciencia y tecnología"},
{titulo:"El mundo y sus demonios",autor:"Carl Sagan",genero:"Ciencia y tecnología"},
{titulo:"Pale Blue Dot",autor:"Carl Sagan",genero:"Ciencia y tecnología"},
{titulo:"El gen egoísta",autor:"Richard Dawkins",genero:"Ciencia y tecnología"},
{titulo:"El relojero ciego",autor:"Richard Dawkins",genero:"Ciencia y tecnología"},
{titulo:"El origen de las especies",autor:"Charles Darwin",genero:"Ciencia y tecnología"},
{titulo:"La doble hélice",autor:"James D. Watson",genero:"Ciencia y tecnología"},
{titulo:"La sexta extinción",autor:"Elizabeth Kolbert",genero:"Ciencia y tecnología"},
{titulo:"Una breve historia de casi todo",autor:"Bill Bryson",genero:"Ciencia y tecnología"},
{titulo:"Astrofísica para gente con prisas",autor:"Neil deGrasse Tyson",genero:"Ciencia y tecnología"},
{titulo:"Orígenes",autor:"Neil deGrasse Tyson",genero:"Ciencia y tecnología"},
{titulo:"El tejido del cosmos",autor:"Brian Greene",genero:"Ciencia y tecnología"},
{titulo:"El universo elegante",autor:"Brian Greene",genero:"Ciencia y tecnología"},
{titulo:"La realidad no es lo que parece",autor:"Carlo Rovelli",genero:"Ciencia y tecnología"},
{titulo:"Siete breves lecciones de física",autor:"Carlo Rovelli",genero:"Ciencia y tecnología"},
{titulo:"El orden del tiempo",autor:"Carlo Rovelli",genero:"Ciencia y tecnología"},
{titulo:"La naturaleza del espacio y el tiempo",autor:"Stephen Hawking y Roger Penrose",genero:"Ciencia y tecnología"},
{titulo:"Gödel, Escher, Bach",autor:"Douglas Hofstadter",genero:"Ciencia y tecnología"},
{titulo:"Clean Code",autor:"Robert C. Martin",genero:"Ciencia y tecnología"},
{titulo:"The Pragmatic Programmer",autor:"Andrew Hunt y David Thomas",genero:"Ciencia y tecnología"},
{titulo:"Código limpio",autor:"Robert C. Martin",genero:"Ciencia y tecnología"},
{titulo:"Design Patterns",autor:"Erich Gamma y otros",genero:"Ciencia y tecnología"},
{titulo:"Artificial Intelligence",autor:"Stuart Russell y Peter Norvig",genero:"Ciencia y tecnología"},
{titulo:"Deep Learning",autor:"Ian Goodfellow y otros",genero:"Ciencia y tecnología"},
{titulo:"Python Crash Course",autor:"Eric Matthes",genero:"Ciencia y tecnología"},
{titulo:"Automate the Boring Stuff with Python",autor:"Al Sweigart",genero:"Ciencia y tecnología"},
{titulo:"Eloquent JavaScript",autor:"Marijn Haverbeke",genero:"Ciencia y tecnología"},
{titulo:"Java: The Complete Reference",autor:"Herbert Schildt",genero:"Ciencia y tecnología"},
{titulo:"HTML and CSS",autor:"Jon Duckett",genero:"Ciencia y tecnología"},
{titulo:"JavaScript and JQuery",autor:"Jon Duckett",genero:"Ciencia y tecnología"},
{titulo:"Don't Make Me Think",autor:"Steve Krug",genero:"Ciencia y tecnología"},
{titulo:"The Design of Everyday Things",autor:"Don Norman",genero:"Ciencia y tecnología"},
{titulo:"Computer Networking",autor:"Andrew S. Tanenbaum",genero:"Ciencia y tecnología"},
{titulo:"Operating System Concepts",autor:"Abraham Silberschatz",genero:"Ciencia y tecnología"},
{titulo:"Computer Organization and Design",autor:"David Patterson y John Hennessy",genero:"Ciencia y tecnología"},
{titulo:"Introduction to Algorithms",autor:"Thomas H. Cormen y otros",genero:"Ciencia y tecnología"},
{titulo:"The Art of Computer Programming",autor:"Donald Knuth",genero:"Ciencia y tecnología"},
{titulo:"Structure and Interpretation of Computer Programs",autor:"Harold Abelson y Gerald Jay Sussman",genero:"Ciencia y tecnología"},

{titulo:"Sapiens",autor:"Yuval Noah Harari",genero:"Historia y sociedad"},
{titulo:"Homo Deus",autor:"Yuval Noah Harari",genero:"Historia y sociedad"},
{titulo:"21 lecciones para el siglo XXI",autor:"Yuval Noah Harari",genero:"Historia y sociedad"},
{titulo:"El laberinto de la soledad",autor:"Octavio Paz",genero:"Historia y sociedad"},
{titulo:"Las venas abiertas de América Latina",autor:"Eduardo Galeano",genero:"Historia y sociedad"},
{titulo:"La noche de Tlatelolco",autor:"Elena Poniatowska",genero:"Historia y sociedad"},
{titulo:"México profundo",autor:"Guillermo Bonfil Batalla",genero:"Historia y sociedad"},
{titulo:"Nueva historia mínima de México",autor:"Pablo Escalante Gonzalbo y otros",genero:"Historia y sociedad"},
{titulo:"Historia de México",autor:"Josefina Zoraida Vázquez",genero:"Historia y sociedad"},
{titulo:"México bárbaro",autor:"John Kenneth Turner",genero:"Historia y sociedad"},
{titulo:"La conquista de México",autor:"Hugh Thomas",genero:"Historia y sociedad"},
{titulo:"La visión de los vencidos",autor:"Miguel León-Portilla",genero:"Historia y sociedad"},
{titulo:"Los de abajo",autor:"Mariano Azuela",genero:"Historia y sociedad"},
{titulo:"La Revolución Mexicana",autor:"Alan Knight",genero:"Historia y sociedad"},
{titulo:"Historia universal",autor:"Peter N. Stearns",genero:"Historia y sociedad"},
{titulo:"Guns, Germs, and Steel",autor:"Jared Diamond",genero:"Historia y sociedad"},
{titulo:"Colapso",autor:"Jared Diamond",genero:"Historia y sociedad"},
{titulo:"Prisioneros de la geografía",autor:"Tim Marshall",genero:"Historia y sociedad"},
{titulo:"El mundo de ayer",autor:"Stefan Zweig",genero:"Historia y sociedad"},
{titulo:"La Segunda Guerra Mundial",autor:"Antony Beevor",genero:"Historia y sociedad"},
{titulo:"Stalingrado",autor:"Antony Beevor",genero:"Historia y sociedad"},
{titulo:"Berlín 1945",autor:"Antony Beevor",genero:"Historia y sociedad"},
{titulo:"La Primera Guerra Mundial",autor:"John Keegan",genero:"Historia y sociedad"},
{titulo:"SPQR",autor:"Mary Beard",genero:"Historia y sociedad"},
{titulo:"Roma",autor:"Steven Saylor",genero:"Historia y sociedad"},
{titulo:"La guerra del Peloponeso",autor:"Tucídides",genero:"Historia y sociedad"},
{titulo:"Historia de la guerra del Peloponeso",autor:"Tucídides",genero:"Historia y sociedad"},
{titulo:"El príncipe",autor:"Nicolás Maquiavelo",genero:"Historia y sociedad"},
{titulo:"La República",autor:"Platón",genero:"Historia y sociedad"},
{titulo:"Política",autor:"Aristóteles",genero:"Historia y sociedad"},
{titulo:"El contrato social",autor:"Jean-Jacques Rousseau",genero:"Historia y sociedad"},
{titulo:"El capital",autor:"Karl Marx",genero:"Historia y sociedad"},
{titulo:"La riqueza de las naciones",autor:"Adam Smith",genero:"Historia y sociedad"},
{titulo:"La ética protestante y el espíritu del capitalismo",autor:"Max Weber",genero:"Historia y sociedad"},
{titulo:"Vigilar y castigar",autor:"Michel Foucault",genero:"Historia y sociedad"},
{titulo:"La sociedad del cansancio",autor:"Byung-Chul Han",genero:"Historia y sociedad"},
{titulo:"Modernidad líquida",autor:"Zygmunt Bauman",genero:"Historia y sociedad"},
{titulo:"El malestar en la cultura",autor:"Sigmund Freud",genero:"Historia y sociedad"},
{titulo:"Los orígenes del totalitarismo",autor:"Hannah Arendt",genero:"Historia y sociedad"},
{titulo:"La condición humana",autor:"Hannah Arendt",genero:"Historia y sociedad"},

{titulo:"La historia del arte",autor:"E. H. Gombrich",genero:"Arte y cultura"},
{titulo:"Modos de ver",autor:"John Berger",genero:"Arte y cultura"},
{titulo:"Sobre la fotografía",autor:"Susan Sontag",genero:"Arte y cultura"},
{titulo:"Historia del arte mexicano",autor:"Justino Fernández",genero:"Arte y cultura"},
{titulo:"El arte moderno",autor:"H. H. Arnason",genero:"Arte y cultura"},
{titulo:"El arte del siglo XX",autor:"Norbert Lynton",genero:"Arte y cultura"},
{titulo:"El mundo del arte",autor:"Robert Hughes",genero:"Arte y cultura"},
{titulo:"Historia del arte occidental",autor:"Hugh Honour y John Fleming",genero:"Arte y cultura"},
{titulo:"La obra de arte en la época de su reproductibilidad técnica",autor:"Walter Benjamin",genero:"Arte y cultura"},
{titulo:"El origen de la obra de arte",autor:"Martin Heidegger",genero:"Arte y cultura"},
{titulo:"Poética",autor:"Aristóteles",genero:"Arte y cultura"},
{titulo:"El nacimiento de la tragedia",autor:"Friedrich Nietzsche",genero:"Arte y cultura"},
{titulo:"El arte de la guerra",autor:"Sun Tzu",genero:"Arte y cultura"},
{titulo:"La interpretación de las culturas",autor:"Clifford Geertz",genero:"Arte y cultura"},
{titulo:"El lenguaje del arte",autor:"John Dewey",genero:"Arte y cultura"},
{titulo:"Arte y percepción visual",autor:"Rudolf Arnheim",genero:"Arte y cultura"},
{titulo:"Gramática de la fantasía",autor:"Gianni Rodari",genero:"Arte y cultura"},
{titulo:"El camino del artista",autor:"Julia Cameron",genero:"Arte y cultura"},
{titulo:"Roba como un artista",autor:"Austin Kleon",genero:"Arte y cultura"},
{titulo:"Muestra tu trabajo",autor:"Austin Kleon",genero:"Arte y cultura"},
{titulo:"Steal Like an Artist",autor:"Austin Kleon",genero:"Arte y cultura"},
{titulo:"Ways of Seeing",autor:"John Berger",genero:"Arte y cultura"},
{titulo:"El ojo del fotógrafo",autor:"Michael Freeman",genero:"Arte y cultura"},
{titulo:"La fotografía como documento social",autor:"Gisèle Freund",genero:"Arte y cultura"},
{titulo:"Historia de la fotografía",autor:"Beaumont Newhall",genero:"Arte y cultura"},
{titulo:"La cámara lúcida",autor:"Roland Barthes",genero:"Arte y cultura"},
{titulo:"El placer de la pintura",autor:"Bob Ross",genero:"Arte y cultura"},
{titulo:"Color y luz",autor:"James Gurney",genero:"Arte y cultura"},
{titulo:"Imaginative Realism",autor:"James Gurney",genero:"Arte y cultura"},
{titulo:"Anatomía para artistas",autor:"Sarah Simblet",genero:"Arte y cultura"},
{titulo:"Dibujo de la figura humana",autor:"Andrew Loomis",genero:"Arte y cultura"},
{titulo:"Figure Drawing for All It's Worth",autor:"Andrew Loomis",genero:"Arte y cultura"},
{titulo:"Creative Illustration",autor:"Andrew Loomis",genero:"Arte y cultura"},
{titulo:"La práctica del diseño gráfico",autor:"Roberto Gamonal",genero:"Arte y cultura"},
{titulo:"Fundamentos del diseño",autor:"Wucius Wong",genero:"Arte y cultura"},
{titulo:"Diseño gráfico",autor:"Jorge Frascara",genero:"Arte y cultura"},
{titulo:"Tipografía",autor:"James Felici",genero:"Arte y cultura"},
{titulo:"Thinking with Type",autor:"Ellen Lupton",genero:"Arte y cultura"},
{titulo:"Diseñar para el mundo real",autor:"Victor Papanek",genero:"Arte y cultura"},
{titulo:"Historia del diseño",autor:"Philip B. Meggs",genero:"Arte y cultura"},

{titulo:"Álgebra",autor:"Baldor",genero:"Textos escolares"},
{titulo:"Geometría y trigonometría",autor:"Baldor",genero:"Textos escolares"},
{titulo:"Aritmética",autor:"Baldor",genero:"Textos escolares"},
{titulo:"Cálculo diferencial",autor:"Granville",genero:"Textos escolares"},
{titulo:"Cálculo integral",autor:"Granville",genero:"Textos escolares"},
{titulo:"Cálculo",autor:"James Stewart",genero:"Textos escolares"},
{titulo:"Precálculo",autor:"James Stewart",genero:"Textos escolares"},
{titulo:"Álgebra lineal",autor:"Stanley Grossman",genero:"Textos escolares"},
{titulo:"Álgebra lineal y sus aplicaciones",autor:"David C. Lay",genero:"Textos escolares"},
{titulo:"Ecuaciones diferenciales",autor:"Dennis G. Zill",genero:"Textos escolares"},
{titulo:"Física para ciencias e ingeniería",autor:"Raymond A. Serway",genero:"Textos escolares"},
{titulo:"Fundamentos de física",autor:"Halliday, Resnick y Walker",genero:"Textos escolares"},
{titulo:"Química",autor:"Raymond Chang",genero:"Textos escolares"},
{titulo:"Química general",autor:"Ralph H. Petrucci",genero:"Textos escolares"},
{titulo:"Biología",autor:"Neil A. Campbell",genero:"Textos escolares"},
{titulo:"Biología molecular de la célula",autor:"Bruce Alberts",genero:"Textos escolares"},
{titulo:"Anatomía humana",autor:"Elaine N. Marieb",genero:"Textos escolares"},
{titulo:"Anatomía con orientación clínica",autor:"Keith L. Moore",genero:"Textos escolares"},
{titulo:"Fisiología médica",autor:"Guyton y Hall",genero:"Textos escolares"},
{titulo:"Psicología",autor:"David G. Myers",genero:"Textos escolares"},
{titulo:"Introducción a la psicología",autor:"Charles G. Morris",genero:"Textos escolares"},
{titulo:"Economía",autor:"Paul A. Samuelson",genero:"Textos escolares"},
{titulo:"Principios de economía",autor:"N. Gregory Mankiw",genero:"Textos escolares"},
{titulo:"Contabilidad financiera",autor:"Gerardo Guajardo Cantú",genero:"Textos escolares"},
{titulo:"Administración",autor:"Stephen P. Robbins",genero:"Textos escolares"},
{titulo:"Marketing",autor:"Philip Kotler",genero:"Textos escolares"},
{titulo:"Investigación de operaciones",autor:"Hamdy A. Taha",genero:"Textos escolares"},
{titulo:"Estadística",autor:"Mario F. Triola",genero:"Textos escolares"},
{titulo:"Probabilidad y estadística",autor:"Walpole",genero:"Textos escolares"},
{titulo:"Métodos numéricos",autor:"Steven C. Chapra",genero:"Textos escolares"},
{titulo:"Estructuras de datos",autor:"Mark Allen Weiss",genero:"Textos escolares"},
{titulo:"Fundamentos de programación",autor:"Luis Joyanes Aguilar",genero:"Textos escolares"},
{titulo:"Programación en C",autor:"Brian W. Kernighan",genero:"Textos escolares"},
{titulo:"Programación Java",autor:"Deitel",genero:"Textos escolares"},
{titulo:"Bases de datos",autor:"Abraham Silberschatz",genero:"Textos escolares"},
{titulo:"Redes de computadoras",autor:"Andrew S. Tanenbaum",genero:"Textos escolares"},
{titulo:"Sistemas operativos",autor:"William Stallings",genero:"Textos escolares"},
{titulo:"Ingeniería de software",autor:"Ian Sommerville",genero:"Textos escolares"},
{titulo:"Arquitectura de computadoras",autor:"William Stallings",genero:"Textos escolares"},

{titulo:"One Piece 1",autor:"Eiichiro Oda",genero:"Anime y manga"},
{titulo:"One Piece 2",autor:"Eiichiro Oda",genero:"Anime y manga"},
{titulo:"One Piece 3",autor:"Eiichiro Oda",genero:"Anime y manga"},
{titulo:"One Piece 4",autor:"Eiichiro Oda",genero:"Anime y manga"},
{titulo:"One Piece 5",autor:"Eiichiro Oda",genero:"Anime y manga"},
{titulo:"Naruto 1",autor:"Masashi Kishimoto",genero:"Anime y manga"},
{titulo:"Naruto 2",autor:"Masashi Kishimoto",genero:"Anime y manga"},
{titulo:"Naruto 3",autor:"Masashi Kishimoto",genero:"Anime y manga"},
{titulo:"Naruto 4",autor:"Masashi Kishimoto",genero:"Anime y manga"},
{titulo:"Naruto 5",autor:"Masashi Kishimoto",genero:"Anime y manga"},
{titulo:"Dragon Ball 1",autor:"Akira Toriyama",genero:"Anime y manga"},
{titulo:"Dragon Ball 2",autor:"Akira Toriyama",genero:"Anime y manga"},
{titulo:"Dragon Ball 3",autor:"Akira Toriyama",genero:"Anime y manga"},
{titulo:"Dragon Ball 4",autor:"Akira Toriyama",genero:"Anime y manga"},
{titulo:"Dragon Ball 5",autor:"Akira Toriyama",genero:"Anime y manga"},
{titulo:"Demon Slayer 1",autor:"Koyoharu Gotouge",genero:"Anime y manga"},
{titulo:"Demon Slayer 2",autor:"Koyoharu Gotouge",genero:"Anime y manga"},
{titulo:"Demon Slayer 3",autor:"Koyoharu Gotouge",genero:"Anime y manga"},
{titulo:"Demon Slayer 4",autor:"Koyoharu Gotouge",genero:"Anime y manga"},
{titulo:"Demon Slayer 5",autor:"Koyoharu Gotouge",genero:"Anime y manga"},
{titulo:"Jujutsu Kaisen 1",autor:"Gege Akutami",genero:"Anime y manga"},
{titulo:"Jujutsu Kaisen 2",autor:"Gege Akutami",genero:"Anime y manga"},
{titulo:"Jujutsu Kaisen 3",autor:"Gege Akutami",genero:"Anime y manga"},
{titulo:"Jujutsu Kaisen 4",autor:"Gege Akutami",genero:"Anime y manga"},
{titulo:"Jujutsu Kaisen 5",autor:"Gege Akutami",genero:"Anime y manga"},
{titulo:"My Hero Academia 1",autor:"Kohei Horikoshi",genero:"Anime y manga"},
{titulo:"My Hero Academia 2",autor:"Kohei Horikoshi",genero:"Anime y manga"},
{titulo:"My Hero Academia 3",autor:"Kohei Horikoshi",genero:"Anime y manga"},
{titulo:"My Hero Academia 4",autor:"Kohei Horikoshi",genero:"Anime y manga"},
{titulo:"My Hero Academia 5",autor:"Kohei Horikoshi",genero:"Anime y manga"},
{titulo:"Death Note 1",autor:"Tsugumi Ohba",genero:"Anime y manga"},
{titulo:"Death Note 2",autor:"Tsugumi Ohba",genero:"Anime y manga"},
{titulo:"Death Note 3",autor:"Tsugumi Ohba",genero:"Anime y manga"},
{titulo:"Death Note 4",autor:"Tsugumi Ohba",genero:"Anime y manga"},
{titulo:"Death Note 5",autor:"Tsugumi Ohba",genero:"Anime y manga"},
{titulo:"Tokyo Ghoul 1",autor:"Sui Ishida",genero:"Anime y manga"},
{titulo:"Tokyo Ghoul 2",autor:"Sui Ishida",genero:"Anime y manga"},
{titulo:"Tokyo Ghoul 3",autor:"Sui Ishida",genero:"Anime y manga"},
{titulo:"Tokyo Ghoul 4",autor:"Sui Ishida",genero:"Anime y manga"},
{titulo:"Tokyo Ghoul 5",autor:"Sui Ishida",genero:"Anime y manga"},

{titulo:"Batman: Año Uno",autor:"Frank Miller",genero:"Cómics y novelas gráficas"},
{titulo:"Batman: The Killing Joke",autor:"Alan Moore",genero:"Cómics y novelas gráficas"},
{titulo:"Batman: El regreso del Caballero Oscuro",autor:"Frank Miller",genero:"Cómics y novelas gráficas"},
{titulo:"Batman: Hush",autor:"Jeph Loeb",genero:"Cómics y novelas gráficas"},
{titulo:"Superman: Red Son",autor:"Mark Millar",genero:"Cómics y novelas gráficas"},
{titulo:"Superman: For All Seasons",autor:"Jeph Loeb",genero:"Cómics y novelas gráficas"},
{titulo:"Watchmen",autor:"Alan Moore",genero:"Cómics y novelas gráficas"},
{titulo:"V de Vendetta",autor:"Alan Moore",genero:"Cómics y novelas gráficas"},
{titulo:"Maus",autor:"Art Spiegelman",genero:"Cómics y novelas gráficas"},
{titulo:"Persépolis",autor:"Marjane Satrapi",genero:"Cómics y novelas gráficas"},
{titulo:"The Sandman: Preludios y nocturnos",autor:"Neil Gaiman",genero:"Cómics y novelas gráficas"},
{titulo:"The Sandman: La casa de muñecas",autor:"Neil Gaiman",genero:"Cómics y novelas gráficas"},
{titulo:"The Sandman: País de sueños",autor:"Neil Gaiman",genero:"Cómics y novelas gráficas"},
{titulo:"The Sandman: Estación de nieblas",autor:"Neil Gaiman",genero:"Cómics y novelas gráficas"},
{titulo:"The Sandman: Un juego de ti",autor:"Neil Gaiman",genero:"Cómics y novelas gráficas"},
{titulo:"Spider-Man: Blue",autor:"Jeph Loeb",genero:"Cómics y novelas gráficas"},
{titulo:"Spider-Man: Kraven's Last Hunt",autor:"J. M. DeMatteis",genero:"Cómics y novelas gráficas"},
{titulo:"Civil War",autor:"Mark Millar",genero:"Cómics y novelas gráficas"},
{titulo:"Old Man Logan",autor:"Mark Millar",genero:"Cómics y novelas gráficas"},
{titulo:"Wolverine: Weapon X",autor:"Barry Windsor-Smith",genero:"Cómics y novelas gráficas"},
{titulo:"X-Men: Dios ama, el hombre mata",autor:"Chris Claremont",genero:"Cómics y novelas gráficas"},
{titulo:"Daredevil: Born Again",autor:"Frank Miller",genero:"Cómics y novelas gráficas"},
{titulo:"Daredevil: The Man Without Fear",autor:"Frank Miller",genero:"Cómics y novelas gráficas"},
{titulo:"Iron Man: Extremis",autor:"Warren Ellis",genero:"Cómics y novelas gráficas"},
{titulo:"Thor: God of Thunder",autor:"Jason Aaron",genero:"Cómics y novelas gráficas"},
{titulo:"Black Panther: A Nation Under Our Feet",autor:"Ta-Nehisi Coates",genero:"Cómics y novelas gráficas"},
{titulo:"Ms. Marvel: No Normal",autor:"G. Willow Wilson",genero:"Cómics y novelas gráficas"},
{titulo:"Saga 1",autor:"Brian K. Vaughan",genero:"Cómics y novelas gráficas"},
{titulo:"Saga 2",autor:"Brian K. Vaughan",genero:"Cómics y novelas gráficas"},
{titulo:"Invincible 1",autor:"Robert Kirkman",genero:"Cómics y novelas gráficas"},
{titulo:"The Walking Dead 1",autor:"Robert Kirkman",genero:"Cómics y novelas gráficas"},
{titulo:"The Walking Dead 2",autor:"Robert Kirkman",genero:"Cómics y novelas gráficas"},
{titulo:"Hellboy: Semilla de destrucción",autor:"Mike Mignola",genero:"Cómics y novelas gráficas"},
{titulo:"Sin City",autor:"Frank Miller",genero:"Cómics y novelas gráficas"},
{titulo:"300",autor:"Frank Miller",genero:"Cómics y novelas gráficas"},
{titulo:"Scott Pilgrim contra el mundo",autor:"Bryan Lee O'Malley",genero:"Cómics y novelas gráficas"},
{titulo:"Nimona",autor:"ND Stevenson",genero:"Cómics y novelas gráficas"},
{titulo:"Heartstopper 1",autor:"Alice Oseman",genero:"Cómics y novelas gráficas"},
{titulo:"Heartstopper 2",autor:"Alice Oseman",genero:"Cómics y novelas gráficas"},
{titulo:"Heartstopper 3",autor:"Alice Oseman",genero:"Cómics y novelas gráficas"},

{titulo:"El Hobbit",autor:"J. R. R. Tolkien",genero:"Fantasía y ciencia ficción"},
{titulo:"La comunidad del anillo",autor:"J. R. R. Tolkien",genero:"Fantasía y ciencia ficción"},
{titulo:"Las dos torres",autor:"J. R. R. Tolkien",genero:"Fantasía y ciencia ficción"},
{titulo:"El retorno del rey",autor:"J. R. R. Tolkien",genero:"Fantasía y ciencia ficción"},
{titulo:"El Silmarillion",autor:"J. R. R. Tolkien",genero:"Fantasía y ciencia ficción"},
{titulo:"Dune",autor:"Frank Herbert",genero:"Fantasía y ciencia ficción"},
{titulo:"El mesías de Dune",autor:"Frank Herbert",genero:"Fantasía y ciencia ficción"},
{titulo:"Hijos de Dune",autor:"Frank Herbert",genero:"Fantasía y ciencia ficción"},
{titulo:"Dios emperador de Dune",autor:"Frank Herbert",genero:"Fantasía y ciencia ficción"},
{titulo:"Fundación",autor:"Isaac Asimov",genero:"Fantasía y ciencia ficción"},
{titulo:"Fundación e Imperio",autor:"Isaac Asimov",genero:"Fantasía y ciencia ficción"},
{titulo:"Segunda Fundación",autor:"Isaac Asimov",genero:"Fantasía y ciencia ficción"},
{titulo:"Yo, robot",autor:"Isaac Asimov",genero:"Fantasía y ciencia ficción"},
{titulo:"El fin de la eternidad",autor:"Isaac Asimov",genero:"Fantasía y ciencia ficción"},
{titulo:"1984",autor:"George Orwell",genero:"Fantasía y ciencia ficción"},
{titulo:"Rebelión en la granja",autor:"George Orwell",genero:"Fantasía y ciencia ficción"},
{titulo:"Fahrenheit 451",autor:"Ray Bradbury",genero:"Fantasía y ciencia ficción"},
{titulo:"Crónicas marcianas",autor:"Ray Bradbury",genero:"Fantasía y ciencia ficción"},
{titulo:"El hombre ilustrado",autor:"Ray Bradbury",genero:"Fantasía y ciencia ficción"},
{titulo:"¿Sueñan los androides con ovejas eléctricas?",autor:"Philip K. Dick",genero:"Fantasía y ciencia ficción"},
{titulo:"Ubik",autor:"Philip K. Dick",genero:"Fantasía y ciencia ficción"},
{titulo:"Solaris",autor:"Stanislaw Lem",genero:"Fantasía y ciencia ficción"},
{titulo:"La guerra de los mundos",autor:"H. G. Wells",genero:"Fantasía y ciencia ficción"},
{titulo:"La máquina del tiempo",autor:"H. G. Wells",genero:"Fantasía y ciencia ficción"},
{titulo:"El hombre invisible",autor:"H. G. Wells",genero:"Fantasía y ciencia ficción"},
{titulo:"Veinte mil leguas de viaje submarino",autor:"Julio Verne",genero:"Fantasía y ciencia ficción"},
{titulo:"Viaje al centro de la Tierra",autor:"Julio Verne",genero:"Fantasía y ciencia ficción"},
{titulo:"De la Tierra a la Luna",autor:"Julio Verne",genero:"Fantasía y ciencia ficción"},
{titulo:"Neuromante",autor:"William Gibson",genero:"Fantasía y ciencia ficción"},
{titulo:"Snow Crash",autor:"Neal Stephenson",genero:"Fantasía y ciencia ficción"},
{titulo:"Ready Player One",autor:"Ernest Cline",genero:"Fantasía y ciencia ficción"},
{titulo:"El problema de los tres cuerpos",autor:"Cixin Liu",genero:"Fantasía y ciencia ficción"},
{titulo:"El bosque oscuro",autor:"Cixin Liu",genero:"Fantasía y ciencia ficción"},
{titulo:"El fin de la muerte",autor:"Cixin Liu",genero:"Fantasía y ciencia ficción"},
{titulo:"La mano izquierda de la oscuridad",autor:"Ursula K. Le Guin",genero:"Fantasía y ciencia ficción"},
{titulo:"Los desposeídos",autor:"Ursula K. Le Guin",genero:"Fantasía y ciencia ficción"},
{titulo:"American Gods",autor:"Neil Gaiman",genero:"Fantasía y ciencia ficción"},
{titulo:"Buenos presagios",autor:"Neil Gaiman y Terry Pratchett",genero:"Fantasía y ciencia ficción"},
{titulo:"La rueda del tiempo",autor:"Robert Jordan",genero:"Fantasía y ciencia ficción"},

{titulo:"Orgullo y prejuicio",autor:"Jane Austen",genero:"Romance"},
{titulo:"Sentido y sensibilidad",autor:"Jane Austen",genero:"Romance"},
{titulo:"Emma",autor:"Jane Austen",genero:"Romance"},
{titulo:"Persuasión",autor:"Jane Austen",genero:"Romance"},
{titulo:"Jane Eyre",autor:"Charlotte Brontë",genero:"Romance"},
{titulo:"Cumbres borrascosas",autor:"Emily Brontë",genero:"Romance"},
{titulo:"Mujercitas",autor:"Louisa May Alcott",genero:"Romance"},
{titulo:"Romeo y Julieta",autor:"William Shakespeare",genero:"Romance"},
{titulo:"Como agua para chocolate",autor:"Laura Esquivel",genero:"Romance"},
{titulo:"El amor en los tiempos del cólera",autor:"Gabriel García Márquez",genero:"Romance"},
{titulo:"La tregua",autor:"Mario Benedetti",genero:"Romance"},
{titulo:"Bajo la misma estrella",autor:"John Green",genero:"Romance"},
{titulo:"Ciudades de papel",autor:"John Green",genero:"Romance"},
{titulo:"Eleanor y Park",autor:"Rainbow Rowell",genero:"Romance"},
{titulo:"Fangirl",autor:"Rainbow Rowell",genero:"Romance"},
{titulo:"Yo antes de ti",autor:"Jojo Moyes",genero:"Romance"},
{titulo:"Después de ti",autor:"Jojo Moyes",genero:"Romance"},
{titulo:"La última carta de amor",autor:"Jojo Moyes",genero:"Romance"},
{titulo:"La hipótesis del amor",autor:"Ali Hazelwood",genero:"Romance"},
{titulo:"La ecuación del amor",autor:"Helen Hoang",genero:"Romance"},
{titulo:"Gente que conocemos en vacaciones",autor:"Emily Henry",genero:"Romance"},
{titulo:"La novela del verano",autor:"Emily Henry",genero:"Romance"},
{titulo:"Book Lovers",autor:"Emily Henry",genero:"Romance"},
{titulo:"People We Meet on Vacation",autor:"Emily Henry",genero:"Romance"},
{titulo:"Rojo, blanco y sangre azul",autor:"Casey McQuiston",genero:"Romance"},
{titulo:"Una última parada",autor:"Casey McQuiston",genero:"Romance"},
{titulo:"Heartstopper",autor:"Alice Oseman",genero:"Romance"},
{titulo:"Aristóteles y Dante descubren los secretos del universo",autor:"Benjamin Alire Sáenz",genero:"Romance"},
{titulo:"Los siete maridos de Evelyn Hugo",autor:"Taylor Jenkins Reid",genero:"Romance"},
{titulo:"Malibú renace",autor:"Taylor Jenkins Reid",genero:"Romance"},
{titulo:"Todos quieren a Daisy Jones",autor:"Taylor Jenkins Reid",genero:"Romance"},
{titulo:"Siempre el mismo día",autor:"David Nicholls",genero:"Romance"},
{titulo:"Un día",autor:"David Nicholls",genero:"Romance"},
{titulo:"Posdata: Te amo",autor:"Cecelia Ahern",genero:"Romance"},
{titulo:"P.D. Te amo",autor:"Cecelia Ahern",genero:"Romance"},
{titulo:"El cuaderno de Noah",autor:"Nicholas Sparks",genero:"Romance"},
{titulo:"Un paseo para recordar",autor:"Nicholas Sparks",genero:"Romance"},
{titulo:"Querido John",autor:"Nicholas Sparks",genero:"Romance"},
{titulo:"Mensaje en una botella",autor:"Nicholas Sparks",genero:"Romance"},
{titulo:"La última canción",autor:"Nicholas Sparks",genero:"Romance"},

{titulo:"Drácula",autor:"Bram Stoker",genero:"Terror y misterio"},
{titulo:"Frankenstein",autor:"Mary Shelley",genero:"Terror y misterio"},
{titulo:"El resplandor",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"It",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"Cementerio de animales",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"Misery",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"Carrie",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"El misterio de Salem's Lot",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"Doctor Sueño",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"El instituto",autor:"Stephen King",genero:"Terror y misterio"},
{titulo:"La casa infernal",autor:"Richard Matheson",genero:"Terror y misterio"},
{titulo:"Soy leyenda",autor:"Richard Matheson",genero:"Terror y misterio"},
{titulo:"El exorcista",autor:"William Peter Blatty",genero:"Terror y misterio"},
{titulo:"La semilla del diablo",autor:"Ira Levin",genero:"Terror y misterio"},
{titulo:"El bebé de Rosemary",autor:"Ira Levin",genero:"Terror y misterio"},
{titulo:"El silencio de los corderos",autor:"Thomas Harris",genero:"Terror y misterio"},
{titulo:"Hannibal",autor:"Thomas Harris",genero:"Terror y misterio"},
{titulo:"El dragón rojo",autor:"Thomas Harris",genero:"Terror y misterio"},
{titulo:"El nombre de la rosa",autor:"Umberto Eco",genero:"Terror y misterio"},
{titulo:"Asesinato en el Orient Express",autor:"Agatha Christie",genero:"Terror y misterio"},
{titulo:"Diez negritos",autor:"Agatha Christie",genero:"Terror y misterio"},
{titulo:"Muerte en el Nilo",autor:"Agatha Christie",genero:"Terror y misterio"},
{titulo:"El asesinato de Roger Ackroyd",autor:"Agatha Christie",genero:"Terror y misterio"},
{titulo:"El misterio de la guía de ferrocarriles",autor:"Agatha Christie",genero:"Terror y misterio"},
{titulo:"Estudio en escarlata",autor:"Arthur Conan Doyle",genero:"Terror y misterio"},
{titulo:"El signo de los cuatro",autor:"Arthur Conan Doyle",genero:"Terror y misterio"},
{titulo:"El sabueso de los Baskerville",autor:"Arthur Conan Doyle",genero:"Terror y misterio"},
{titulo:"El valle del terror",autor:"Arthur Conan Doyle",genero:"Terror y misterio"},
{titulo:"La mujer de negro",autor:"Susan Hill",genero:"Terror y misterio"},
{titulo:"El fantasma de la ópera",autor:"Gaston Leroux",genero:"Terror y misterio"},
{titulo:"El castillo de Otranto",autor:"Horace Walpole",genero:"Terror y misterio"},
{titulo:"El monje",autor:"Matthew Lewis",genero:"Terror y misterio"},
{titulo:"Carmilla",autor:"Sheridan Le Fanu",genero:"Terror y misterio"},
{titulo:"Otra vuelta de tuerca",autor:"Henry James",genero:"Terror y misterio"},
{titulo:"El corazón delator",autor:"Edgar Allan Poe",genero:"Terror y misterio"},
{titulo:"La caída de la Casa Usher",autor:"Edgar Allan Poe",genero:"Terror y misterio"},
{titulo:"El gato negro",autor:"Edgar Allan Poe",genero:"Terror y misterio"},
{titulo:"El cuervo",autor:"Edgar Allan Poe",genero:"Terror y misterio"},
{titulo:"El horror de Dunwich",autor:"H. P. Lovecraft",genero:"Terror y misterio"},
{titulo:"La llamada de Cthulhu",autor:"H. P. Lovecraft",genero:"Terror y misterio"},

{titulo:"Hábitos atómicos",autor:"James Clear",genero:"Desarrollo personal y negocios"},
{titulo:"Los 7 hábitos de la gente altamente efectiva",autor:"Stephen R. Covey",genero:"Desarrollo personal y negocios"},
{titulo:"Cómo ganar amigos e influir sobre las personas",autor:"Dale Carnegie",genero:"Desarrollo personal y negocios"},
{titulo:"Piense y hágase rico",autor:"Napoleon Hill",genero:"Desarrollo personal y negocios"},
{titulo:"El poder del ahora",autor:"Eckhart Tolle",genero:"Desarrollo personal y negocios"},
{titulo:"Los secretos de la mente millonaria",autor:"T. Harv Eker",genero:"Desarrollo personal y negocios"},
{titulo:"Padre rico, padre pobre",autor:"Robert Kiyosaki",genero:"Desarrollo personal y negocios"},
{titulo:"El hombre más rico de Babilonia",autor:"George S. Clason",genero:"Desarrollo personal y negocios"},
{titulo:"La psicología del dinero",autor:"Morgan Housel",genero:"Desarrollo personal y negocios"},
{titulo:"El inversor inteligente",autor:"Benjamin Graham",genero:"Desarrollo personal y negocios"},
{titulo:"Un paso por delante de Wall Street",autor:"Peter Lynch",genero:"Desarrollo personal y negocios"},
{titulo:"El pequeño libro para invertir con sentido común",autor:"John C. Bogle",genero:"Desarrollo personal y negocios"},
{titulo:"Pensar rápido, pensar despacio",autor:"Daniel Kahneman",genero:"Desarrollo personal y negocios"},
{titulo:"Influencia",autor:"Robert Cialdini",genero:"Desarrollo personal y negocios"},
{titulo:"Pre-suasión",autor:"Robert Cialdini",genero:"Desarrollo personal y negocios"},
{titulo:"Nunca te pares",autor:"Phil Knight",genero:"Desarrollo personal y negocios"},
{titulo:"De cero a uno",autor:"Peter Thiel",genero:"Desarrollo personal y negocios"},
{titulo:"El método Lean Startup",autor:"Eric Ries",genero:"Desarrollo personal y negocios"},
{titulo:"La semana laboral de 4 horas",autor:"Timothy Ferriss",genero:"Desarrollo personal y negocios"},
{titulo:"Reinicia",autor:"Jason Fried y David Heinemeier Hansson",genero:"Desarrollo personal y negocios"},
{titulo:"Delivering Happiness",autor:"Tony Hsieh",genero:"Desarrollo personal y negocios"},
{titulo:"Good to Great",autor:"Jim Collins",genero:"Desarrollo personal y negocios"},
{titulo:"Built to Last",autor:"Jim Collins y Jerry Porras",genero:"Desarrollo personal y negocios"},
{titulo:"Start with Why",autor:"Simon Sinek",genero:"Desarrollo personal y negocios"},
{titulo:"Los líderes comen al final",autor:"Simon Sinek",genero:"Desarrollo personal y negocios"},
{titulo:"El arte de empezar",autor:"Guy Kawasaki",genero:"Desarrollo personal y negocios"},
{titulo:"Vendes o vendes",autor:"Grant Cardone",genero:"Desarrollo personal y negocios"},
{titulo:"La vaca púrpura",autor:"Seth Godin",genero:"Desarrollo personal y negocios"},
{titulo:"Esto es marketing",autor:"Seth Godin",genero:"Desarrollo personal y negocios"},
{titulo:"Contagioso",autor:"Jonah Berger",genero:"Desarrollo personal y negocios"},
{titulo:"Hooked",autor:"Nir Eyal",genero:"Desarrollo personal y negocios"},
{titulo:"Sprint",autor:"Jake Knapp",genero:"Desarrollo personal y negocios"},
{titulo:"Creatividad, S.A.",autor:"Ed Catmull",genero:"Desarrollo personal y negocios"},
{titulo:"El dilema de los innovadores",autor:"Clayton Christensen",genero:"Desarrollo personal y negocios"},
{titulo:"Empieza con el porqué",autor:"Simon Sinek",genero:"Desarrollo personal y negocios"},
{titulo:"Las 48 leyes del poder",autor:"Robert Greene",genero:"Desarrollo personal y negocios"},
{titulo:"El arte de la seducción",autor:"Robert Greene",genero:"Desarrollo personal y negocios"},
{titulo:"Maestría",autor:"Robert Greene",genero:"Desarrollo personal y negocios"},
{titulo:"Mindset",autor:"Carol S. Dweck",genero:"Desarrollo personal y negocios"},
{titulo:"Grit",autor:"Angela Duckworth",genero:"Desarrollo personal y negocios"}
];
const catalogo = document.getElementById("catalogoLibros");
const buscar = document.getElementById("buscar");
const contador = document.getElementById("contadorLibros");
const filtros = document.querySelectorAll(".filtro");
const btnGenero = document.getElementById("btnGenero");
const btnAZ = document.getElementById("btnAZ");

let filtroActual = "Todos";
let ordenActual = "genero";

function normalizar(texto) {
    return String(texto ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

const equivalenciasGenero = {
    "fantasia": "Fantasía y ciencia ficción",
    "ciencia ficcion": "Fantasía y ciencia ficción",
    "fantasia y ciencia ficcion": "Fantasía y ciencia ficción",

    "terror": "Terror y misterio",
    "misterio": "Terror y misterio",
    "misterio y thriller": "Terror y misterio",
    "thriller": "Terror y misterio",

    "autoayuda": "Desarrollo personal y negocios",
    "desarrollo personal": "Desarrollo personal y negocios",
    "negocios": "Desarrollo personal y negocios",
    "economia y negocios": "Desarrollo personal y negocios",

    "computacion": "Ciencia y tecnología",
    "computacion y programacion": "Ciencia y tecnología",
    "programacion": "Ciencia y tecnología",

    "infantil": "Infantil y juvenil",
    "juvenil": "Infantil y juvenil",

    "comics": "Cómics y novelas gráficas",
    "comics y novelas graficas": "Cómics y novelas gráficas"
};

function obtenerGeneroCanonico(valor) {

    const texto = normalizar(valor);

    if (texto === "todos") {
        return "Todos";
    }

    const exacto = libros.find(libro =>
        normalizar(libro.genero) === texto
    );

    if (exacto) {
        return exacto.genero;
    }

    return equivalenciasGenero[texto] || valor;
}

function perteneceAlGenero(libro, filtro) {

    if (filtro === "Todos") {
        return true;
    }

    const generoCanonico =
        obtenerGeneroCanonico(filtro);

    return normalizar(libro.genero) ===
           normalizar(generoCanonico);
}

function obtenerLibros() {

    let resultado = [...libros];

    if (filtroActual !== "Todos") {

        resultado = resultado.filter(libro =>
            perteneceAlGenero(
                libro,
                filtroActual
            )
        );
    }

    const texto =
        buscar ? normalizar(buscar.value) : "";

    if (texto !== "") {

        resultado = resultado.filter(libro =>

            normalizar(libro.titulo)
                .includes(texto) ||

            normalizar(libro.autor)
                .includes(texto) ||

            normalizar(libro.genero)
                .includes(texto)

        );
    }

    if (ordenActual === "az") {

        resultado.sort((a, b) =>
            a.titulo.localeCompare(
                b.titulo,
                "es",
                {
                    sensitivity: "base"
                }
            )
        );

    } else {

        resultado.sort((a, b) => {

            const genero =
                a.genero.localeCompare(
                    b.genero,
                    "es",
                    {
                        sensitivity: "base"
                    }
                );

            if (genero !== 0) {
                return genero;
            }

            return a.titulo.localeCompare(
                b.titulo,
                "es",
                {
                    sensitivity: "base"
                }
            );
        });
    }

    return resultado;
}

function escaparHTML(texto) {

    const div =
        document.createElement("div");

    div.textContent = texto;

    return div.innerHTML;
}

const cachePortadas = new Map();

async function obtenerPortada(libro) {

    const clave =
        `${libro.titulo}|${libro.autor}`;

    if (cachePortadas.has(clave)) {
        return cachePortadas.get(clave);
    }

    try {

        const cacheLocal =
            localStorage.getItem(
                `portada_${normalizar(clave)}`
            );

        if (cacheLocal) {

            cachePortadas.set(
                clave,
                cacheLocal
            );

            return cacheLocal;
        }

    } catch (error) {
        console.warn(
            "No se pudo acceder al almacenamiento local."
        );
    }

    try {

        const consulta =
            encodeURIComponent(
                `${libro.titulo} ${libro.autor}`
            );

        const respuesta =
            await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${consulta}&maxResults=1`
            );

        if (!respuesta.ok) {
            throw new Error(
                "No se pudo consultar Google Books"
            );
        }

        const datos =
            await respuesta.json();

        const volumen =
            datos.items?.[0];

        const imagen =
            volumen?.volumeInfo?.imageLinks?.thumbnail ||
            volumen?.volumeInfo?.imageLinks?.smallThumbnail;

        if (imagen) {

            const portada =
                imagen.replace(
                    "http://",
                    "https://"
                );

            cachePortadas.set(
                clave,
                portada
            );

            try {

                localStorage.setItem(
                    `portada_${normalizar(clave)}`,
                    portada
                );

            } catch (error) {
                console.warn(
                    "No se pudo guardar la portada."
                );
            }

            return portada;
        }

    } catch (error) {

        console.warn(
            "No se encontró portada para:",
            libro.titulo
        );
    }

    cachePortadas.set(
        clave,
        ""
    );

    return "";
}

function portadaAlternativa(
    libro,
    indice
) {

    const letra =
        escaparHTML(
            libro.titulo
                .charAt(0)
                .toUpperCase()
        );

    const numero =
        String(indice + 1)
            .padStart(3, "0");

    return `
        <div class="portada-fallback">

            <span class="portada-numero">
                ${numero}
            </span>

            <strong>
                ${letra}
            </strong>

            <small>
                LIBRERIA
            </small>

        </div>
    `;
}

function crearLibro(
    libro,
    indice
) {

    const tarjeta =
        document.createElement("article");

    tarjeta.className =
        "libro-card";

    const indiceReal =
        libros.indexOf(libro);

    tarjeta.innerHTML = `

        <div class="libro-portada">

            ${portadaAlternativa(
                libro,
                indice
            )}

        </div>

        <div class="libro-info">

            <span class="libro-genero">
                ${escaparHTML(
                    libro.genero
                )}
            </span>

            <h3>
                ${escaparHTML(
                    libro.titulo
                )}
            </h3>

            <p class="libro-autor">
                ${escaparHTML(
                    libro.autor
                )}
            </p>

            <button
                class="btn-libro"
                type="button"
                data-indice="${indiceReal}">

                Ver información

            </button>

        </div>
    `;

    const portada =
        tarjeta.querySelector(
            ".libro-portada"
        );

    obtenerPortada(libro)
        .then(imagen => {

            if (
                !imagen ||
                !portada.isConnected
            ) {
                return;
            }

            const img =
                document.createElement("img");

            img.src = imagen;

            img.alt =
                `Portada de ${libro.titulo}`;

            img.loading = "lazy";

            img.referrerPolicy =
                "no-referrer";

            img.className =
                "portada-imagen";

            img.addEventListener(
                "error",
                () => {

                    img.remove();

                }
            );

            portada.innerHTML = "";

            portada.appendChild(img);

        });

    return tarjeta;
}

function mostrarLibros() {

    if (!catalogo) {
        return;
    }

    const resultado =
        obtenerLibros();

    catalogo.innerHTML = "";

    if (contador) {

        contador.textContent =
            resultado.length;

    }

    if (resultado.length === 0) {

        catalogo.innerHTML = `

            <div class="sin-resultados">

                <h3>
                    No encontramos libros
                </h3>

                <p>
                    Intenta buscar otro título,
                    autor o categoría.
                </p>

            </div>

        `;

        return;
    }

    const fragmento =
        document.createDocumentFragment();

    resultado.forEach(
        (libro, indice) => {

            fragmento.appendChild(
                crearLibro(
                    libro,
                    indice
                )
            );

        }
    );

    catalogo.appendChild(
        fragmento
    );

    catalogo
        .querySelectorAll(
            ".btn-libro"
        )
        .forEach(boton => {

            boton.addEventListener(
                "click",
                () => {

                    const indice =
                        Number(
                            boton.dataset.indice
                        );

                    const libro =
                        libros[indice];

                    if (libro) {
                        mostrarModal(
                            libro
                        );
                    }

                }
            );

        });
}

function actualizarContadores() {

    const elementos =
        document.querySelectorAll(
            ".filtro, " +
            ".categorias-aside a, " +
            ".categorias a, " +
            "[data-genero]"
        );

    elementos.forEach(
        elemento => {

            const valor =

                elemento.dataset.filtro ||

                elemento.dataset.genero ||

                elemento.textContent.trim();

            if (
                !valor ||
                normalizar(valor) ===
                "todos"
            ) {
                return;
            }

            const cantidad =
                libros.filter(
                    libro =>
                        perteneceAlGenero(
                            libro,
                            valor
                        )
                ).length;

            const contadorExistente =

                elemento.querySelector(
                    ".contador-genero, " +
                    ".cantidad, " +
                    ".count"
                ) ||

                elemento.querySelector(
                    "span[data-contador]"
                );

            if (contadorExistente) {

                contadorExistente.textContent =
                    cantidad;

            }

            if (
                elemento.dataset.contadorId
            ) {

                const externo =
                    document.getElementById(
                        elemento.dataset.contadorId
                    );

                if (externo) {

                    externo.textContent =
                        cantidad;

                }
            }
        }
    );
}

function mostrarModal(libro) {

    const modal =
        document.getElementById(
            "modal"
        );

    const contenido =
        document.getElementById(
            "modalContenido"
        );

    if (
        !modal ||
        !contenido
    ) {
        return;
    }

    const google =
        "https://www.google.com/search?q=" +
        encodeURIComponent(
            libro.titulo +
            " " +
            libro.autor
        );

    const amazon =
        "https://www.amazon.com.mx/s?k=" +
        encodeURIComponent(
            libro.titulo +
            " " +
            libro.autor
        );

    const portada =
        cachePortadas.get(
            `${libro.titulo}|${libro.autor}`
        ) || "";

    contenido.innerHTML = `

        <div class="modal-libro">

            ${
                portada
                ?
                `
                    <img
                        src="${portada}"
                        alt="Portada de ${escaparHTML(
                            libro.titulo
                        )}"
                        class="modal-portada"
                    >
                `
                :
                ""
            }

            <span class="modal-genero">

                ${escaparHTML(
                    libro.genero
                )}

            </span>

            <h2>

                ${escaparHTML(
                    libro.titulo
                )}

            </h2>

            <p>

                <strong>
                    Autor:
                </strong>

                ${escaparHTML(
                    libro.autor
                )}

            </p>

            <p>

                Este título forma parte
                del catálogo de Libreria
                y puede consultarse en
                diferentes plataformas
                de libros.

            </p>

            <div class="modal-botones">

                <a
                    href="${google}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn principal">

                    Buscar en Google Books

                </a>

                <a
                    href="${amazon}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn secundario">

                    Buscar en Amazon

                </a>

            </div>

        </div>
    `;

    modal.classList.add(
        "mostrar"
    );
}

function cerrarModal() {

    const modal =
        document.getElementById(
            "modal"
        );

    if (modal) {

        modal.classList.remove(
            "mostrar"
        );

    }
}

filtros.forEach(
    filtro => {

        filtro.addEventListener(
            "click",
            () => {

                filtros.forEach(
                    elemento =>
                        elemento.classList.remove(
                            "activo"
                        )
                );

                filtro.classList.add(
                    "activo"
                );

                filtroActual =
                    filtro.dataset.filtro ||
                    filtro.textContent.trim();

                mostrarLibros();

            }
        );

    }
);

if (buscar) {

    buscar.addEventListener(
        "input",
        mostrarLibros
    );

}

if (btnGenero) {

    btnGenero.addEventListener(
        "click",
        () => {

            ordenActual =
                "genero";

            btnGenero.classList.add(
                "activo"
            );

            if (btnAZ) {

                btnAZ.classList.remove(
                    "activo"
                );

            }

            mostrarLibros();

        }
    );

}

if (btnAZ) {

    btnAZ.addEventListener(
        "click",
        () => {

            ordenActual =
                "az";

            btnAZ.classList.add(
                "activo"
            );

            if (btnGenero) {

                btnGenero.classList.remove(
                    "activo"
                );

            }

            mostrarLibros();

        }
    );

}

const cerrar =
    document.getElementById(
        "cerrarModal"
    );

if (cerrar) {

    cerrar.addEventListener(
        "click",
        cerrarModal
    );

}

const modal =
    document.getElementById(
        "modal"
    );

if (modal) {

    modal.addEventListener(
        "click",
        evento => {

            if (
                evento.target === modal
            ) {

                cerrarModal();

            }

        }
    );

}

document.addEventListener(
    "keydown",
    evento => {

        if (
            evento.key === "Escape"
        ) {

            cerrarModal();

        }

    }
);

const btnNewsletter =
    document.getElementById(
        "btnNewsletter"
    );

const correoNewsletter =
    document.getElementById(
        "correoNewsletter"
    );

if (
    btnNewsletter &&
    correoNewsletter
) {

    btnNewsletter.addEventListener(
        "click",
        () => {

            const correo =
                correoNewsletter.value.trim();

            if (correo === "") {

                alert(
                    "Escribe tu correo electrónico."
                );

                correoNewsletter.focus();

                return;
            }

            if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    .test(correo)
            ) {

                alert(
                    "Escribe un correo electrónico válido."
                );

                correoNewsletter.focus();

                return;
            }

            alert(
                "¡Gracias por suscribirte al boletín de Libreria!"
            );

            correoNewsletter.value = "";

        }
    );

}

function seleccionarCategoria(
    valor
) {

    const canonico =
        obtenerGeneroCanonico(
            valor
        );

    filtros.forEach(
        filtro => {

            const filtroValor =
                filtro.dataset.filtro ||
                filtro.textContent.trim();

            filtro.classList.toggle(
                "activo",
                normalizar(
                    obtenerGeneroCanonico(
                        filtroValor
                    )
                ) ===
                normalizar(
                    canonico
                )
            );

        }
    );

    filtroActual =
        canonico;

    mostrarLibros();
}

document
    .querySelectorAll(
        ".categorias a, " +
        ".categorias-aside a"
    )
    .forEach(
        enlace => {

            enlace.addEventListener(
                "click",
                evento => {

                    const texto =

                        enlace.dataset.genero ||

                        enlace.dataset.filtro ||

                        enlace.textContent.trim();

                    if (!texto) {
                        return;
                    }

                    evento.preventDefault();

                    seleccionarCategoria(
                        texto
                    );

                    const catalogoSeccion =
                        document.getElementById(
                            "catalogo"
                        );

                    if (
                        catalogoSeccion
                    ) {

                        catalogoSeccion.scrollIntoView(
                            {
                                behavior: "smooth"
                            }
                        );

                    }

                }
            );

        }
    );

actualizarContadores();

mostrarLibros();