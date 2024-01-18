import NewPostHeader from "./NewPostHeader";
import Post from "./Post";

export default function PostsFeed() {
  return (
    <section className="flex flex-1 flex-col gap-3">
      <NewPostHeader />
      <div className="flex flex-col gap-2">
        <Post
          id="first"
          title="Rajasthan Police Hackathon 1.0"
          content="Hackathon Under RACCAM (Rajasthan Police Cyber Crime Awareness Mission), Rajasthan Police has launched the Hackathon Portal on 18th April 2023, on the occasion of Rajasthan Police Diwas. The main objective is to identify Talent, Innovative Ideas and Technological Solutions and to establish linkages with Individuals, Industry, Start-ups and Educational Institutions.

RACCAM (Rajasthan Police Cyber Crime Awareness Mission) is an initiative by Rajasthan Police to join hands and partner with all the stakeholders to deal with Digital Threats and Cyber Crime. By creating a Joint ‘Morcha’ of Police, People and Professionals across sectors viz IT Companies, Academia, Banks, Ethical Hackers, etc, RACCAM aims at providing a secure Cyber Space.

The Hackathon 1.O is divided in 4 phases. In the first phase, teams have to register themselves while selecting the Problem Statements covering areas like Dark Web, Social Media Alert, innovative Crime Stats Analysis, HR Management, Enterprise Resource Planning, etc. shall be posed to the willing participants to develop solutions."
          userName="Manoj Tiwari (State Admin)"
          votes={120}
          image="https://www.police.rajasthan.gov.in/old/hackathon/assetsNew/banner3.webp"
        />
        <Post
          id="first"
          title="new post"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          userName="user name"
          votes={100}
          image="/hero.jpeg"
        />
      </div>
    </section>
  );
}
