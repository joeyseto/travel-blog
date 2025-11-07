import BlogPostTemplate from "@/components/BlogPostTemplate";

export default function KyotoStory() {
  return (
    <BlogPostTemplate
      title="Visiting ancient shrines in Kyoto"
      date="February 10, 2024"
      location="Kyoto, Japan"
      heroImage="/images/kyoto.jpg"
      tags={["Culture", "Japan", "Temples", "History"]}
    >
      <p>
        Kyoto is a city where every corner reveals a piece of history. Walking through the 
        famous Fushimi Inari shrine with its thousands of vermillion torii gates felt like 
        stepping into another world.
      </p>

      <p>
        The path winds up the mountainside, each gate donated by individuals and businesses 
        over centuries. As I climbed higher, the crowds thinned, and I found myself alone 
        with the sound of rustling bamboo and distant temple bells.
      </p>

      <h2>Beyond Fushimi Inari</h2>

      <p>
        Kyoto has over 2,000 temples and shrines. I spent days exploring:
      </p>

      <ul>
        <li>Kinkaku-ji (Golden Pavilion) - stunning in any season</li>
        <li>Arashiyama Bamboo Grove - arrive early to beat the crowds</li>
        <li>Kiyomizu-dera - incredible views over the city</li>
      </ul>

      <p>
        Each temple tells a story of Japan's rich cultural heritage, and wandering through 
        them felt like traveling back in time.
      </p>
    </BlogPostTemplate>
  );
}