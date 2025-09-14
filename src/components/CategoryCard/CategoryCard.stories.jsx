import CategoryCard from './CategoryCard.jsx';

export default {
    title: 'Components/CategoryCard',
    component: CategoryCard,
};

export const Default = {
    args: {
        onClick: () => console.log("click!"),
        category:
        {
            "categoryName": "Arkitektur & Designmönster",
            "terms": [
                {
                    "term": "Monorepository (Monorepo)",
                    "en": "A version control strategy where multiple projects or components are stored and managed within a single, unified repository. This approach allows all related codebases to coexist, enabling shared code, consistent tooling, and centralized versioning. While a monorepo can simplify development for smaller projects by keeping everything in one place, it can become difficult to manage as the project scales, potentially leading to challenges with build times, dependency management, and coordination among teams. For this reason, monorepos may be more suited to smaller or simpler projects rather than large, complex systems.",
                    "se": "En strategi för versionshantering där flera projekt eller komponenter lagras i ett enda gemensamt repository. Detta gör det enklare att dela kod, använda samma verktyg och ha en central versionhantering. För små projekt kan detta vara praktiskt, men i stora system kan det skapa problem med byggtider, beroenden och samordning mellan team.",
                    "seSimple": "Alla projekt och komponenter sparas i samma kodförråd."
                },
                {
                    "term": "Multi-Tier Architecture",
                    "en": "A software architecture pattern that separates an application into multiple, distinct layers or tiers, each responsible for specific aspects of the application's functionality. This separation of concerns helps to organize code, improve scalability, and manage complexity by allowing each tier to evolve independently. The most common form is a three-tier architecture, but applications can have more or fewer tiers depending on the design requirements.",
                    "se": "Ett mönster där en applikation delas upp i flera lager eller nivåer som ansvarar för olika delar av funktionaliteten. Detta gör koden mer organiserad, skalbar och lättare att underhålla. Den vanligaste formen är tre lager, men det kan vara fler eller färre beroende på behov.",
                    "seSimple": "Att dela upp program i flera lager, t.ex. data, logik och gränssnitt."
                }
            ]
        },
    }
};

export const withoutData = {
    args: {
        onClick: () => console.log("click!"),
    }
};