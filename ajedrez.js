const juego = new Chess();

const tablero = document.getElementById("tablero");
const estado = document.getElementById("estado");
const reiniciar = document.getElementById("reiniciar");

let casillaSeleccionada = null;

const piezas = {
    w: {
        k: "♔",
        q: "♕",
        r: "♖",
        b: "♗",
        n: "♘",
        p: "♙"
    },

    b: {
        k: "♚",
        q: "♛",
        r: "♜",
        b: "♝",
        n: "♞",
        p: "♟"
    }
};

function crearTablero() {

    tablero.innerHTML = "";

    const posicion = juego.board();

    for (let fila = 0; fila < 8; fila++) {

        for (let columna = 0; columna < 8; columna++) {

            const casilla = document.createElement("div");

            const letra = String.fromCharCode(97 + columna);
            const numero = 8 - fila;

            const coordenada = letra + numero;

            casilla.classList.add("casilla");

            if ((fila + columna) % 2 === 0) {
                casilla.classList.add("clara");
            } else {
                casilla.classList.add("oscura");
            }

            casilla.dataset.casilla = coordenada;

            const pieza = posicion[fila][columna];

            if (pieza) {

                const elementoPieza = document.createElement("span");

                elementoPieza.classList.add("pieza");

                elementoPieza.textContent =
                    piezas[pieza.color][pieza.type];

                casilla.appendChild(elementoPieza);
            }

            casilla.addEventListener("click", () => seleccionarCasilla(coordenada));

            tablero.appendChild(casilla);
        }
    }

    mostrarMovimientos();
    actualizarEstado();
}

function seleccionarCasilla(coordenada) {

    if (juego.game_over()) {
        return;
    }

    const pieza = juego.get(coordenada);

    if (casillaSeleccionada) {

        const movimiento = juego.move({
            from: casillaSeleccionada,
            to: coordenada,
            promotion: "q"
        });

        if (movimiento) {

            casillaSeleccionada = null;

            crearTablero();

            return;
        }
    }

    if (pieza && pieza.color === juego.turn()) {

        casillaSeleccionada = coordenada;

        crearTablero();

        const casilla = document.querySelector(
            `[data-casilla="${coordenada}"]`
        );

        if (casilla) {
            casilla.classList.add("seleccionada");
        }

        mostrarMovimientos();
    }
}

function mostrarMovimientos() {

    if (!casillaSeleccionada) {
        return;
    }

    const movimientos = juego.moves({
        square: casillaSeleccionada,
        verbose: true
    });

    movimientos.forEach(movimiento => {

        const casilla = document.querySelector(
            `[data-casilla="${movimiento.to}"]`
        );

        if (!casilla) {
            return;
        }

        if (movimiento.captured) {
            casilla.classList.add("movimiento-captura");
        } else {
            casilla.classList.add("movimiento");
        }
    });
}

function actualizarEstado() {

    if (juego.in_checkmate()) {

        const ganador =
            juego.turn() === "w"
                ? "Negras"
                : "Blancas";

        estado.textContent =
            "Jaque mate. Ganaron " + ganador;

        return;
    }

    if (juego.in_stalemate()) {

        estado.textContent = "Tablas por ahogado";

        return;
    }

    if (juego.in_threefold_repetition()) {

        estado.textContent =
            "Tablas por repetición";

        return;
    }

    if (juego.insufficient_material()) {

        estado.textContent =
            "Tablas por material insuficiente";

        return;
    }

    if (juego.in_draw()) {

        estado.textContent =
            "Tablas";

        return;
    }

    if (juego.in_check()) {

        estado.textContent =
            juego.turn() === "w"
                ? "¡Jaque! Turno de Blancas"
                : "¡Jaque! Turno de Negras";

        marcarReyEnJaque();

        return;
    }

    estado.textContent =
        juego.turn() === "w"
            ? "Turno: Blancas"
            : "Turno: Negras";
}

function marcarReyEnJaque() {

    const color = juego.turn();

    const tableroActual = juego.board();

    for (let fila = 0; fila < 8; fila++) {

        for (let columna = 0; columna < 8; columna++) {

            const pieza = tableroActual[fila][columna];

            if (
                pieza &&
                pieza.type === "k" &&
                pieza.color === color
            ) {

                const letra =
                    String.fromCharCode(97 + columna);

                const numero = 8 - fila;

                const coordenada =
                    letra + numero;

                const casilla =
                    document.querySelector(
                        `[data-casilla="${coordenada}"]`
                    );

                if (casilla) {
                    casilla.classList.add("jaque");
                }
            }
        }
    }
}

reiniciar.addEventListener("click", () => {

    juego.reset();

    casillaSeleccionada = null;

    crearTablero();
});

crearTablero();