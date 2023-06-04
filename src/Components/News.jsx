import React from 'react';
import './News.css';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'A New Manager In Town: Mike Valkanis Signs With Hapoel Tel Aviv',
      image: 'src/pictures/news-img1.jpg',    
      content: 'Hapoel Tel Aviv has a new coach. Greek-Australian Michael Valkanis (48), finished his position at the Qatari Asphire Acadamy, known for developing young players. In the past he stood the lines in Melbourne City and Adelaide United in Australia and in Belgium. He also served as an assistant coach in the Greek and Dutch national team. He signed a two-year contract plus an option. Valkanis said after the signing: "I am excited for the opportunity given to me to be the coach of Hapoel Tel Aviv, to manage one of the most successful clubs in Israel that has such a glorious history. This position will be a great challenge and an exciting opportunity for me, one that I look forward to. I promise that my team and I will give everything to help the players be the best version of themselves. With the help of hard and joint work we will create special moments and return the club to its rightful place.',
    },
    {
      id: 2,
      title: 'Official - Alon Turgeman Joins Hapoel Beer Sheva',
      image: 'src/pictures/news-img2.jpg',
      content: 'Hapoel Beer Sheva has a new attacker. The Reds announced today (Tuesday) on the addition of Alon Turgeman, who agreed with the club for two years and will sign subject to medical tests. The striker will be the first player of Eliniv Barda this summer and one who can upgrade his front part. Turgeman, who finished his contract with Hapoel Haifa and became a free agent, expressed a great desire to join Hapoel B.S. and was willing to do so even for a lower salary than what he earned in Carmel. The B.S. professional team believes that the striker will be able to contribute to the upgrade of the wing, a position that was less prominent in the team in the past season.',
    }
  ];
const news2=[
{
  id: 3,
  title: 'A Star In The Making: Europe is putting its eye on Dor Turgeman after another great perfomance. Maccabi Tel Aviv know how hard itll be to keep him this summer.',
  image: 'src/pictures/news-img3.jpg',
  content: 'In light of his wonderful ability in the Mondialeto, Maccabi Tel Aviv understands that it will be difficult to keep Dor Turgeman in the team. The striker experienced a great tournament, including a star perfomance in the victory over Brazil with a goal after a brilliant individual play. In addition to the offers that already exist, among others from Benfica Lisbon, he arouses interest in all of Europe, and it is estimated that Maccabi Tel Aviv will receive additional official offers soon. Despite the players contract for another season with the Yellows and despite Maccabi Tel Aviv offering him a long-term contract, Turgeman would prefer to go to Europe. It is already clear that in any case Maccabi Tel Aviv is building on the player and he should be integrated in a much more massive way than he was this year, but the big question will of course be whether it will be possible to keep him. In any case, a very interesting summer is expected for the youngster.'
}
]
const news3 = [
  {
    id: 5,
    title: 'Will Be Part Of Beer Shevas Line-Up Next Season? All about Ilay Madmons future ',
    image: 'src/pictures/news-img6.webp',    
    content: 'The success of the youth team is sweeping Israel and it is very possible that Ilay Mademon will benefit a lot from it. The 20-year-old midfielder will begin training for the 2023/24 season with Hapoel Beer Sheva and will go with the team to the training camp, after which it will be decided on the continuation of his career. If he impresses in the training camp, Madamon may remain in the Hapoel BS squad this season with the idea of ​giving him significant playing minutes. Another option is to loan him for a third season in a row after he already wore the uniform of Bnei Yehuda and last season was a small part of Beitar Jerusalems victory in the state cup.',
  }
];
const news4 = [
  {
  id: 4,
  title: 'Done Deal: Omer Atzili will sign with El Ain',
  image: 'src/pictures/news-img4.jpg',
  content: 'Maccabi Haifa has already come to terms with the departure of Omer Atzili, who is currently on a private vacation. Most of the details with El Ain have already been closed and as soon as the final signing is made, its representatives will inform the Greens about the realization of his release clause which stands at two million euros. In the coming days, Atzil is expected to fly to the United Arab Emirates for a historic signing, becoming the first Jewish Israeli to play in the country. Maccabi Haifa is already preparing for the moment of his departure and the intention is to land a senior replacement. The list of candidates includes Ostends winger Thierry Ambrose and Virgil Mesidan who is out of contract at Twente.'
}
]
const news5 = [
  {
    id: 6,
    title: 'Official: Roi Shokarni Signes With Bnei Reina',
    image: 'src/pictures/news-img5.webp',
    content: 'Streangthing the midfield. Bnei Raina announced today (Tuesday) the signing of Roi Shokarni, the 32-year-old who played in Sakhnin last season. Reina expressed a shocking interest back in January, after offering Sakhnin a trade that included Osama Halaila for the midfielder. Sharon Mimer, it should be noted, also coached him in Sakhnin. Shukarni has been playing in the Premier League for years, and has played in Hapoel Haifa, Kiryat Shmona, Raanana, Acre and Nof HaGalil, among others. Now he joins Mimars team which continues to get stronger for next season.'
  }
]

  return (
    <div className="news-page">
      <h1>Recent Football News</h1>
      <div className="news-container">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="news-container2">
        {news2.map((item) => (
          <div key={item.id} className="news-item2">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="news-container3">
        {news3.map((item) => (
          <div key={item.id} className="news-item3">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="news-container2">
        {news4.map((item) => (
          <div key={item.id} className="news-item2">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="news-container3">
        {news5.map((item) => (
          <div key={item.id} className="news-item3">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
