export interface Output {
    data: Data[];
    links: {
        self: string;
        current: string;
        next: string;
        last: string;
    };
}

export interface BreedAttributes {
    name: string;
    description: string;
    life: {
        max: number;
        min: number;
    };
    male_weight: {
        max: number;
        min: number;
    };
    female_weight: {
        max: number;
        min: number;
    };
    hypoallergenic: boolean;
}

export interface Group {
    id: string;
    type: string;
}

export interface Relationships {
    group: {
        data: Group;
    };
}

export interface Data {
    id: string;
    type: string;
    attributes: BreedAttributes;
    relationships: Relationships;
}
// {
//     "data": [
//       {
//         "id": "68f47c5a-5115-47cd-9849-e45d3c378f12",
//         "type": "breed",
//         "attributes": {
//           "name": "Caucasian Shepherd Dog",
//           "description": "The Caucasian Shepherd Dog is a large and powerful breed of dog from the
// Caucasus Mountains region. These dogs are large in size, with a thick double coat to protect
// them from the cold. They have a regal bearing, with a proud and confident demeanor.
// They are highly intelligent and loyal, making them excellent guard dogs.
// They are courageous and alert, with an instinct to protect their family and property.
// They are highly trainable, but require firm and consistent training.",
//           "life": {
//             "max": 20,
//             "min": 15
//           },
//           "male_weight": {
//             "max": 90,
//             "min": 50
//           },
//           "female_weight": {
//             "max": 70,
//             "min": 45
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "8000793f-a1ae-4ec4-8d55-ef83f1f644e5",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "4ddbe251-72af-495e-8e9d-869217e1d92a",
//         "type": "breed",
//         "attributes": {
//           "name": "Bouvier des Flandres",
//           "description": "The Bouvier des Flandres is a large and powerful breed of dog from the Flanders
// region of Belgium. These dogs are very large in size, with a thick double coat of wire-haired fur.
// They have a dignified but energetic demeanor, making them excellent working dogs.
// They are highly intelligent and trainable, with an instinct to protect their family and property.
// They are brave and loyal, with an independent nature that makes them well suited for herding and guard work.",
//           "life": {
//             "max": 14,
//             "min": 10
//           },
//           "male_weight": {
//             "max": 40,
//             "min": 30
//           },
//           "female_weight": {
//             "max": 35,
//             "min": 25
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "b8e4e89d-057f-432a-9e58-0b85b29b693c",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "f534c847-bed1-4b58-b194-dc06ecfe20f9",
//         "type": "breed",
//         "attributes": {
//           "name": "Grand Basset Griffon Vendéen",
//           "description": "The Grand Basset Griffon Vendéen is a medium-sized breed of scent hound from
// the Vendéen region of France. These dogs are medium in size, with a long and wiry coat of fur.
// They have an energetic and cheerful demeanor, with an instinct for hunting and tracking.
// They are highly trainable and intelligent, but require firm and consistent training to be obedient.
// They are loyal and devoted to their family, but can be stubborn and independent at times.",
//           "life": {
//             "max": 15,
//             "min": 12
//           },
//           "male_weight": {
//             "max": 30,
//             "min": 20
//           },
//           "female_weight": {
//             "max": 30,
//             "min": 20
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "be0147df-7755-4228-b132-2518c0c6d10d",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "30f62219-e225-42cd-bd07-02425f944c07",
//         "type": "breed",
//         "attributes": {
//           "name": "Hokkaido",
//           "description": "The Hokkaido is a medium-sized breed of dog from the island of Hokkaido in Japan.
// These dogs are medium in size, with a thick double coat of fur to protect them from the cold.
// They have a dignified and loyal demeanor, making them excellent guard and companion dogs.
// They are intelligent and trainable, but require firm and consistent training to be obedient.
// They are brave and alert, with an instinct to protect their family and property.",
//           "life": {
//             "max": 15,
//             "min": 12
//           },
//           "male_weight": {
//             "max": 30,
//             "min": 20
//           },
//           "female_weight": {
//             "max": 30,
//             "min": 20
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "8000793f-a1ae-4ec4-8d55-ef83f1f644e5",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "087979f3-1c45-4d8a-a153-462bf5ea379e",
//         "type": "breed",
//         "attributes": {
//           "name": "Japanese Terrier",
//           "description": "The Japanese Terrier is a small breed of terrier from Japan.
// These dogs are small in size, with a short and wiry coat of fur.
// They have a lively and energetic demeanor, with an instinct for hunting.
// They are highly intelligent and trainable, but require firm and consistent training to be obedient.
// They are loyal and devoted to their family, with an independent nature that makes them well suited for herding and guard work.",
//           "life": {
//             "max": 20,
//             "min": 15
//           },
//           "male_weight": {
//             "max": 4,
//             "min": 2
//           },
//           "female_weight": {
//             "max": 4,
//             "min": 2
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "8000793f-a1ae-4ec4-8d55-ef83f1f644e5",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "dbff689b-8370-4b6a-9306-215aba549102",
//         "type": "breed",
//         "attributes": {
//           "name": "Hanoverian Scenthound",
//           "description": "The Hanoverian Scenthound is a medium-sized breed of scent hound from
// the Hanover region of Germany. These dogs are medium in size, with a short and wiry coat of fur.
// They have a friendly and energetic demeanor, with an instinct for hunting and tracking.
// They are highly intelligent and trainable, but require firm and consistent training to be obedient.
// They are loyal and devoted to their family, but can be stubborn and independent at times.",
//           "life": {
//             "max": 14,
//             "min": 12
//           },
//           "male_weight": {
//             "max": 25,
//             "min": 20
//           },
//           "female_weight": {
//             "max": 25,
//             "min": 20
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "8000793f-a1ae-4ec4-8d55-ef83f1f644e5",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "6f540c30-27a8-48cc-8d88-0b1d9fa99167",
//         "type": "breed",
//         "attributes": {
//           "name": "Tibetan Spaniel",
//           "description": "The Tibetan Spaniel is a small breed of spaniel from Tibet.
// These dogs are small in size, with a short and silky coat of fur.
// They have a cheerful and affectionate demeanor, making them excellent companion dogs.
// They are highly trainable and intelligent, with an instinct to protect their family and property.
// They are loyal and devoted to their family, but can be stubborn and independent at times.",
//           "life": {
//             "max": 16,
//             "min": 14
//           },
//           "male_weight": {
//             "max": 7,
//             "min": 5
//           },
//           "female_weight": {
//             "max": 7,
//             "min": 5
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "7f6ea988-366a-4e20-b4ba-4d04274fea61",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "20b1d8be-ae44-4a70-8526-0612904bc9b2",
//         "type": "breed",
//         "attributes": {
//           "name": "Border Collie",
//           "description": "The Border Collie is a medium-sized breed of herding dog from the borders of
//  England and Scotland.
//  These dogs are medium in size, with a thick double coat of fur to protect them from the cold.
//  They have an energetic and intelligent demeanor, with an instinct for herding and working.
//  They are highly trainable and obedient, but require firm and consistent training to be obedient.
//  They are loyal and devoted to their family, with an independent nature that makes them well suited for herding and guard work.",
//           "life": {
//             "max": 16,
//             "min": 12
//           },
//           "male_weight": {
//             "max": 30,
//             "min": 20
//           },
//           "female_weight": {
//             "max": 25,
//             "min": 17
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "b8e4e89d-057f-432a-9e58-0b85b29b693c",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "6dee41b1-0805-4f4e-a079-c8b1cdfa1768",
//         "type": "breed",
//         "attributes": {
//           "name": "Curly-Coated Retriever",
//           "description": "The Curly-Coated Retriever is a large breed of retrieving dog from England.
//  These dogs are large in size, with a curly coat of fur. They have a dignified and energetic demeanor,
//  making them excellent working dogs. They are highly intelligent and trainable, with an instinct to
//  retrieve game. They are loyal and devoted to their family, with an independent nature that makes
//  them well suited for retrieving and guard work.",
//           "life": {
//             "max": 14,
//             "min": 12
//           },
//           "male_weight": {
//             "max": 34,
//             "min": 27
//           },
//           "female_weight": {
//             "max": 32,
//             "min": 25
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "ab110192-e41b-43ff-a630-f7aee156b33a",
//               "type": "group"
//             }
//           }
//         }
//       },
//       {
//         "id": "beff84c3-66c4-4335-beba-f346c2565881",
//         "type": "breed",
//         "attributes": {
//           "name": "Skye Terrier",
//           "description": "The Skye Terrier is a small breed of terrier from the Isle of Skye in Scotland.
// These dogs are small in size, with a long and wiry coat of fur.
// They have a dignified and independent demeanor, with an instinct for hunting.
// They are highly intelligent and trainable, but require firm and consistent training to be obedient.
// They are loyal and devoted to their family, but can be stubborn and independent at times.",
//           "life": {
//             "max": 15,
//             "min": 12
//           },
//           "male_weight": {
//             "max": 8,
//             "min": 7
//           },
//           "female_weight": {
//             "max": 8,
//             "min": 7
//           },
//           "hypoallergenic": false
//         },
//         "relationships": {
//           "group": {
//             "data": {
//               "id": "1bbf373b-1937-4e73-9863-45385daa4979",
//               "type": "group"
//             }
//           }
//         }
//       }
//     ],
//     "links": {
//       "self": "https://dogapi.dog/api/v2/breeds",
//       "current": "https://dogapi.dog/api/v2/breeds?page[number]=1",
//       "next": "https://dogapi.dog/api/v2/breeds?page[number]=2",
//       "last": "https://dogapi.dog/api/v2/breeds?page[number]=29"
//     }
//   }
