import Flashcard from "./Flashcard"
import { MemoryRouter } from "react-router-dom";

export default {
    title: "Components/Flashcard",
    component: Flashcard,
}

export const Default = {
    args: {
        data: {
            term: "Versionshantering",
            en: "A system that records changes to files over time so that you can recall specific versions later. It allows multiple developers to collaborate on a project by tracking and managing changes to the codebase. Version control systems (VCS) enable developers to work simultaneously on different parts of a project, keep track of every modification, and revert back to previous versions if necessary.",
            sv: "Versionshantering innebär att man håller reda på förändringar i kod eller filer över tid. Genom versionshantering kan utvecklare samarbeta, se vem som gjort vilka ändringar och återgå till tidigare versioner om något går fel.",
            enkel: "Ett sätt att spara och hålla koll på olika versioner av filer eller kod så att man kan samarbeta och backa om något blir fel."
        },
        numOfCards: 5,
        index: 0
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
}

export const withoutData = {
    args: {
        numOfCards: 5,
        index: 0
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
}
