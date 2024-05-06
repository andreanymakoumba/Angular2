import { Component } from '@angular/core';
import { Films } from '../../models/films.model';

@Component({
  selector: 'app-lista-films',
  templateUrl: './lista-films.component.html',
  styleUrl: './lista-films.component.css'
})
export class ListaFilmsComponent {

  listaFilms: Films[] = [
    new Films (
      "The Grudge",
     2020,
     [
      "Andrea Riseborough",
      "Demián Bichir",
      "John Cho",
      "Betty Gilpin",
      "Lin Shaye",
      "Jacki Weaver"
    ],
    [
      "Horror",
      "Supernatural"
    ],
     "The_Grudge_(2020_film)",
    "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
     "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
     220,
    326
    ),

    new Films(
    "Underwater",
    2020,
      [
        "Kristen Stewart",
        "Vincent Cassel",
        "Jessica Henwick",
        "John Gallagher Jr.",
        "Mamoudou Athie",
        "T.J. Miller"
      ],
       [
        "Action",
        "Horror",
        "Science Fiction"
      ],
       "Underwater_(film)",
      "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
       "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
      250,
       398
    ),
    new Films(
      "Like a Boss",
      2020,
      [
        "Tiffany Haddish",
        "Rose Byrne",
        "Salma Hayek",
        "Jennifer Coolidge",
        "Billy Porter"
      ],
       [
        "Comedy"
      ],
       "Like_a_Boss_(film)",
      "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
       "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
       259,
       383
    ),
    new Films(
      "Three Christs",
     2020,
     [
      "Richard Gere",
      "Peter Dinklage",
      "Walton Goggins",
      "Bradley Whitford"
    ],
     [
      "Drama"
    ],
     "Three_Christs",
     "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
     "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
     259,
     383
    ), 
    new Films(
       "Inherit the Viper",
       2020,
       [
        "Josh Hartnett",
        "Margarita Levieva",
        "Chandler Riggs",
        "Bruce Dern",
        "Owen Teague"
      ],
       [
        "Crime",
        "Drama"
      ],
       "Inherit_the_Viper",
       "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.",
       "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
       236,
       350
    ),

    new Films(
      "The Sonata",
       2020,
       [
        "Freya Tingley",
        "Simon Abkarian",
        "Rutger Hauer",
        "James Faulkner"
      ],
       [
        "Mystery",
        "Thriller"
      ],
       "The_Sonata_(film)",
      "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.",
       "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
       246,
       350
    ),
    new Films(
      "The Murder of Nicole Brown Simpson",
      2020,
       [
        "Mena Suvari",
        "Nick Stahl",
        "Taryn Manning"
      ],
       [
        "Crime",
        "Horror"
      ],
       "The_Murder_of_Nicole_Brown_Simpson",
       "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
       "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
       263,
       380
    ),
    new Films(
       "Bad Boys for Life",
       2020,
       [
        "Will Smith",
        "Martin Lawrence",
        "Vanessa Hudgens",
        "Alexander Ludwig",
        "Charles Melton",
        "Paola Núñez",
        "Kate del Castillo",
        "Nicky Jam",
        "Joe Pantoliano"
      ],
      [
        "Action",
        "Comedy"
      ],
       "Bad_Boys_for_Life",
       "Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
       "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
       219,
       325
    ),

  ]
}
