import BlogPostTemplate from "@/components/BlogPostTemplate";

export default function LaosStory() {
  return (
    <BlogPostTemplate
      title="Catching air in Vang Vieng"
      date="January 5, 2024"
      location="Vang Vieng, Laos"
      heroImage="/images/laos.jpg"
      tags={["Adventure", "Laos", "Water Sports", "Adrenaline"]}
    >
      <p>
        Vang Vieng has transformed from a backpacker party town into an adventure sports 
        paradise. Today, I was testing that reputation with some cliff jumping and kayaking 
        through the stunning karst landscape.
      </p>

      <p>
        Standing on the edge of a 10-meter cliff, looking down at the turquoise water below, 
        my heart was racing. But the rush of freefall and the splash into the cool river 
        made it all worthwhile.
      </p>

      <h2>More Than Just Jumping</h2>

      <p>
        Beyond the adrenaline activities, Vang Vieng offers:
      </p>

      <ul>
        <li>Kayaking through cave systems</li>
        <li>Hot air balloon rides at sunrise</li>
        <li>Exploring the Blue Lagoon</li>
        <li>Rock climbing on limestone cliffs</li>
      </ul>

      <p>
        It's the perfect destination for adventure seekers who also want to relax in a 
        beautiful natural setting.
      </p>
    </BlogPostTemplate>
  );
}