import Card from "../Card/Card";
// import placeholder from "../../../public/placeholder.png";

const CardsContainer = () => {
  const dogs = [
    {
      id: "5d387d24-ad0b-4373-9b4e-45ba57530688",
      name: "Pit bull",
      image: "",
      heightMin: 20,
      heightMax: 60,
      weightMin: 13,
      weightMax: 36,
      life_span: "10 - 16 years",
      createdByUser: true,
      temperaments: ["Happy", "Wild"],
    },
    {
      id: "f0b85a1e-acd6-475d-afd1-004b57d8f519",
      name: "Pit bull2",
      image: "",
      heightMin: 20,
      heightMax: 60,
      weightMin: 13,
      weightMax: 36,
      life_span: "10 - 16 years",
      createdByUser: true,
      temperaments: ["Happy", "Wild"],
    },
    {
      id: 1,
      name: "Affenpinscher",
      image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
      heightMin: "23",
      heightMax: "29",
      weightMin: "3",
      weightMax: "6",
      life_span: "10 - 12 years",
      createdByUser: false,
      temperaments: [
        "Stubborn",
        "Curious",
        "Playful",
        "Adventurous",
        "Active",
        "Fun-loving",
      ],
    },
    {
      id: 2,
      name: "Afghan Hound",
      image: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
      heightMin: "64",
      heightMax: "69",
      weightMin: "23",
      weightMax: "27",
      life_span: "10 - 13 years",
      createdByUser: false,
      temperaments: ["Aloof", "Clownish", "Dignified", "Independent", "Happy"],
    },
    {
      id: 3,
      name: "African Hunting Dog",
      image: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
      heightMin: "76",
      heightMax: "76",
      weightMin: "20",
      weightMax: "30",
      life_span: "11 years",
      createdByUser: false,
      temperaments: ["Wild", "Hardworking", "Dutiful"],
    },
  ];
  return (
    <main>
      {dogs.map((dog) => {
        return (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={
              dog.image
                ? dog.image
                : process.env.PUBLIC_URL + "/placeholder.png"
            }
            heightMin={dog.heightMin}
            heightMax={dog.heightMax}
            weightMin={dog.weightMin}
            weightMax={dog.weightMax}
            life_span={dog.life_span}
            temperaments={dog.temperaments}
          />
        );
      })}
    </main>
  );
};

export default CardsContainer;
