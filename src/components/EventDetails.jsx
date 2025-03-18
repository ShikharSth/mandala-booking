import { useParams, Link } from "react-router-dom";
import bg_1 from '../assets/bg/bg-1.jpg';
import bg_2 from '../assets/bg/bg-2.jpg';
import bg_3 from '../assets/bg/bg-3.jpg';
import bg_4 from '../assets/bg/bg-4.jpg';
import bg_5 from '../assets/bg/bg-5.jpg';
import bg_6 from '../assets/bg/bg-6.png';
import bg_7 from '../assets/bg/bg-7.jpg';
import bg_8 from '../assets/bg/bg-8.jpg';
import bg_9 from '../assets/bg/bg-9.jpg';
import bg_10 from '../assets/bg/bg-10.jpg';
import bg_11 from '../assets/bg/bg-11.jpg';
import bg_12 from '../assets/bg/bg-12.jpg';
import bg_13 from '../assets/bg/bg-13.jpg';

import back from '../assets/svg/back.svg';



const events = [
    {
        id: "1",
        title: "Kandata & Sakuntala",
        location: "Mandala Studio",
        time: "45 mins",
        startDate: "March 20, 2025",
        endDate: "March 20, 2025",
        image: bg_1,
        synopsis: "Two timeless tales intertwine in this theatrical performance, bringing together the Buddhist parable of Kandata’s torment in hell and the revered Mahabharata story of Shakuntala. Though their fates will never cross, they are bound by a shared struggle—each resisting the destiny imposed upon them. Rooted in the indigenous spiritual beliefs of Asia, this performance invites audiences to reflect on humanity’s coexistence with the divine and nature in a chaotic world. The play is a joint production of artists from Japan and Nepal and is based on stories written by Kalidasa and Akutagawa Ryunosuke.",
        date: "20",
        day: "Thu",
        time1: "12:00 PM",
        time2: "4:30 PM",
    },
    {
        id: "2",
        title: "Mochou Mochou",
        location: "Mandala, Thapagaun",
        time: "65 mins.",
        startDate: "March 20, 2025",
        endDate: "March 20, 2025",
        image: bg_2,
        synopsis: "In Ming Dynasty, young nobleman Xu Cheng falls in love with palace maid Mo Chou, whose beauty and intellect captivate him. When Xu learns her father was executed by a corrupt minister and she was sold into servitude, he defies his grandmother's arranged marriage to Prime Minister's daughter Cai Yun. Their elopement fails, leading to Mo's public humiliation. Consumed by grief, Xu becomes critically ill. Cai bribes doctors to use Mo's eyes as a cure, forcing her to gouge them out selflessly. Escaping captivity, Mo drowned herself in despair, followed by Xu in suicide. Transformed into twin lotuses, they eternalize their tragic love in mortal bonds. The play critiques feudal oppression and celebrates selfless devotion. ",
        date: "20",
        day: "Thu",
        time1: "2:00 PM",
        time2: "5:45 PM",
    },
    {
        id: "3",
        title: "ABORIGINAL CRY",
        location: "Mandala Studio",
        time: "60 mins.",
        startDate: "March 21, 2025",
        endDate: "March 21, 2025",
        image: bg_3,
        synopsis: "Aboriginal Cry opens with the harmonious connection between the aborigine and their land—rivers, forests, paddy fields, lakes, and hills passed down by ancestors, expressed through sounds and movement. But this sacred inheritance is threatened by the arrival of powerful corporate forces, backed by the state. Tensions rise as the aborigines confront these forces in a clash of sound and fury. The aborigines fight to protect their land, culture, and values, while the brute forces respond with oppressive, discordant noise. Ultimately, the aborigines are displaced to barren land, stripped of their heritage, and overcome with helplessness. In the face of such loss, their anguished cry echoes—a cry of pain, yet of resilience, as they vow to fight for their roots. The play tries to depict the hardships of displaced people and communities affected by 6 mega dams in Manipur in India.",
        date: "21",
        day: "Fri",
        time1: "12:00 PM",
        time2: "4:30 PM",
    },
    {
        id: "4",
        title: "ASCH",
        location: "Mandala, Thapagaun",
        time: "60 mins.",
        startDate: "March 21, 2025",
        endDate: "March 21, 2025",
        image: bg_4,
        synopsis: "In the country of “Matetssamachtawch”, plagued by a series of absurd events, Madame Cesscu Ciao, editor-in-chief of the newspaper “Beyond Imagination”, assigns her team to cover the recent events. Their investigations explore the sense of injustice that links different characters, offering a psychosocial perspective on events based on scientific experiments. As the action unfolds, six actors take on alternating roles, combining dramatic performance and theatrical dance. The play is produced by Association Carmen pour la culture et les arts.",
        date: "21",
        day: "Fri",
        time1: "2:00 PM",
        time2: "5:45 PM",
    },
    {
        id: "5",
        title: "Antigone",
        location: "Mandala Studio",
        time: "40 mins.",
        startDate: "March 22, 2025",
        endDate: "March 22, 2025",
        image: bg_5,
        synopsis: "This solo psychological drama delves into the internal struggles of a character who confronts a repressed dimension of his own personality. Initially in conflict, these two aspects of himself gradually move toward understanding, acceptance, and coexistence. As equilibrium is reached, the sudden arrival of a third presence—symbolizing yet another layer of his subconscious—triggers a moment of surprise and transformation, deepening the exploration of identity and self-knowledge.",
        date: "22",
        day: "Sat",
        time1: "12:00 PM",
        time2: "4:30 PM",
    },
    {
        id: "6",
        title: "Charming Jinju Opera Episodes",
        location: "Mandala, Thapagaun",
        time: "60 mins.",
        startDate: "March 22, 2025",
        endDate: "March 22, 2025",
        image: bg_6,
        synopsis: "The performance opens with the mythological romance of Zhong Kui Marrying His Sister, where flame-spouting rituals and shapeshifting choreography create an enchanting atmosphere. The poignant drama The Fourth Son Visits His Mother follows, unveiling heart-wrenching emotions through the rhythmic head-swinging (Shaozi Gong) technique. Other highlights include Praying for Justice from Sea God Temple, a haunting tale of betrayal and hallucination expressed through flowing water-sleeve dances, and Lin Chong’s Night Run, a gripping escape scene that demands both acrobatic skill and vocal precision. This captivating gala performance immerses audiences in the vibrant world of Shanxi Jinju Opera, a national intangible cultural heritage renowned for its soul-stirring vocals, intricate costumes, and dynamic stage techniques. The program features nine iconic episodes from both classic and contemporary Jinju repertoire, each showcasing the genre's rich cultural legacy.",
        date: "22",
        day: "Sat",
        time1: "2:00 PM",
        time2: "5:45 PM",
    },
    {
        id: "7",
        title: "Tamasha",
        location: "Mandala, Thapagaun",
        time: "65 mins.",
        startDate: "March 23, 2025",
        endDate: "March 23, 2025",
        image: bg_7,
        synopsis: 'The play presents interconnected stories by Sadat Hassan Manto, each examining the human condition in the face of conflict and survival. In the first story "Tamasha", a family is overwhelmed by war and flees in search of safety. "Ten Rupee" follows a child forced into prostitution, where a man`s regretful transformation takes place after spending a day with her. "Smell" tells of a man haunted by a passionate night shared with a factory worker. In "The Hundred-Watt Power Bulb," a prostitute kills her relentless pimp in a desperate bid for rest. "The Rats of Shahdol" depicts a mother’s lifelong grief after losing her child, whom she had once abandoned. The play ends with "The Dog of Titwal," a tragic tale of a dog caught between two warring nations, rejected by both armies. Each story explores themes of loss, regret, and the enduring impact of conflict on the human spirit.',
        date: "23",
        day: "Sun",
        time1: "2:00 PM",
        time2: "5:45 PM",
    },
    {
        id: "8",
        title: "Wisdoms of Life",
        location: "Mandala Studio",
        time: "80 mins.",
        startDate: "March 23, 2025",
        endDate: "March 23, 2025",
        image: bg_8,
        synopsis: 'Wisdom of Life, explores the lessons that shape us—some gentle, others transformative—each enriching our understanding of what it means to be human. By bringing personal narratives to the stage, we honor life’s complexity, celebrating both struggles and triumphs. In sharing stories, we create a space where every experience, no matter how big or small, resonates with others, reminding us of our shared journey toward meaning and growth. ',
        date: "23",
        day: "Sun",
        time1: "4:00 PM",
    },
    {
        id: "9",
        title: "Jhoda",
        location: "Mandala, Thapagaun",
        time: "90 mins.",
        startDate: "March 24, 2025",
        endDate: "March 24, 2025",
        image: bg_9,
        synopsis: 'Jhoda, based on Ganesh Rasik’s novel Akashgangako Otmuni, explores the struggle for land ownership and political manipulation of indigenous communities in eastern Nepal. The story follows Rupama, who uncovers how political parties exploited former soldiers to transfer land to the Jhoda, only to entangle them in a relentless political battle. The play highlights how native inhabitants were reduced to squatters, how political self-interest fractured their unity, and the enduring fight for their rightful land. Through a powerful narrative, Jhoda sheds light on the indigenous perspective and their resilience against systemic dispossession. ',
        date: "24",
        day: "Mon",
        time1: "2:00 PM",
        time2: "5:45 PM",
    },
    {
        id: "10",
        title: "New Normal",
        location: "Mandala Studio",
        time: "40 mins.",
        startDate: "March 25, 2025",
        endDate: "March 25, 2025",
        image: bg_10,
        synopsis: [
            'New Normal follows friends Aaravi, Minal, and Smriti as they navigate the past, present, and future after the unexpected arrival of people from the old world—Earth. Why have they come, and how will they adapt? When the trio meets Diya, they quickly realize that their world is about to change in ways they never imagined.<br /><br />',
            'New Normal is an original play which has resulted from an exciting international collaboration between disabled artists in Nepal and Scotland. The play has been developed through "Unwrap", a series of creative development workshops and weaves ideas and new writing from artists in both countries to create a truly collaborative new work of accessible theatre that explores how the tales we tell and the myths we build can define us and our societies. The play creatively embeds access provisions such as Nepali sign language, captioning and audio description.<br /><br />',
            '<b>About the Directors:</b><br /><br />',
            'Morna is a disabled theatre-maker, facilitator, director, dramaturg and mentor- working across a multitude of theatre settings in Scotland and internationally since 2009. Morna is passionate about creating space for people who are currently under-represented within the arts to make the work they want to exist in the world. <br /><br />',
            'Gunjan Dixit is a theatre practitioner, director, and educator specializing in applied theatre and socially engaged performance. A Chevening Scholar with a Master’s from the University of Leeds, she co-founded Phulbari Playback Theatre in Nepal. Her work fosters dialogue through artistic interventions, using theatre as a catalyst for social change. <br /><br />',],
        date: "25",
        day: "Tue",
        time1: "12:00 PM",
        time2: "4:30 PM",
    },
    {
        id: "11",
        title: "Sama Chako Sama Chako Ahiwa Hey",
        location: "Mandala, Thapagaun",
        time: "55 mins.",
        startDate: "March 25, 2025",
        endDate: "March 25, 2025",
        image: bg_11,
        synopsis: 'The play is a theatrical exploration of cultural tradition, myth and social reality. It is deeply rooted in the Maithili heritage of Nepal. The story unfolds in a village preparing for Sama-Chakeva, a festival that celebrates the bond between siblings. The villagers create clay figures of mythological characters which magically come to life and engage in conversations reflecting the deep cultural heritage and myths of the community. Amidst the festival`s preparations, the play delves into the lives of real characters. Barkha`s story is particularly poignant. It highlights the themes of love, sacrifice and the societal pressure she faces, culminating in her tragic end. The interplay between the mythological elements and everyday struggles of the villagers offers a layered narrative that critiques societal norms while celebrating cultural traditions. Through its evocative storytelling, the play explores the enduring impact of myths and the complex social dynamics within the village.',
        date: "25",
        day: "Tue",
        time1: "2:00 PM",
        time2: "5:45 PM",
    },
    {
        id: "12",
        title: "Lemlemmā",
        location: "Mandala, Thapagaun",
        time: "1 hrs 30 mins.",
        startDate: "March 19, 2025",
        endDate: "March 19, 2025",
        image: bg_12,
        synopsis: [
            'पानीमा खरानी उमालेर कपडा धोएको सम्झिन सक्नुहुन्छ ? पैतालाको टिका लाएर बाटो लाग्ने गर्नुहुन्छ ? जाँड खानु-अघि जुठो लगाइहाल्नुहुन्छ ? कहिले प्रश्न गर्नु भएको छ, यो सब किन र कहिलेदेखि गर्न थाल्नु भएको होला भनी ? माझ किरातका हामीहरूको संस्कारमा मुन्दुम्, मिथक, र मौखिक-परम्परागत-प्रणालीले अत्यन्तै महत्त्व राख्दछ ।<br /><br />',
            'मुन्दुम्, मिथक, र सुनी आएका मौखिक-परम्परागत-प्रणालीको उपज हो— “उम्लिँदो खरानी र लेम्लेम्मा” । मातृसत्तात्मक समाजमा पितृसत्तात्मक विचारको बिउँले सुस्तरी, अन्ततः कसरी ग्रसित पाऱ्यो; यससँगसँगै रैथानी सौन्दर्यलाई कसरी मास्न, र भाँड्न खोज्यो— प्रतीकात्मक प्रतिप्रश्न गर्दछ यो नाटकले ।<br /><br />',
            'समग्रमा यो नाटक; सामान्य निम्न परिवारमा सुनी आएको मिथक, वास्तविकतामा परिणत भयो भने ? देखेको मिठो निदरी/सपना बीभत्स बन्दै गयो भने ? यिनै कुराहरूको सेरोफेरोमा बाँचिरहेका छन्— यो नाटकका पात्रहरू ।<br /><br />'],
        date: "19",
        day: "Wed",
        time1: "2:00 PM",
        // time2: "4:30 PM",
    },
    {
        id: "13",
        title: "Master Shoko & Margarita",
        location: "Mandala Studio",
        time: "60 mins.",
        startDate: "March 23, 2025",
        endDate: "March 23, 2025",
        image: bg_13,
        synopsis: [
            'One day, in the bustling Schönefeld Airport in Germany, Shoko meets Yura, a young Russian man, by chance. Yura has traveled to Berlin to reunite with his girlfriend, but their meeting does not go as planned. Struggling with personal challenges and harboring a deep secret, Yura finds solace in sharing his favorite Russian story, Master and Margarita, with Shoko.<br /><br />',
            'Through a series of short stories that blend reality with fantasy, spirituality with secularism, and music with dance, the performance explores universal themes of love, freedom, and the human condition. As Shoko and Yura’s friendship deepens, the boundaries between their worlds dissolve, revealing a shared space where cultural and personal differences no longer matter.<br /><br />'],
        date: "23",
        day: "Sun",
        time1: "12:00 PM",
        // time2: "4:30 PM",
    },
];

const EventDetails = () => {
    const { id } = useParams();
    const event = events.find(event => event.id === id);

    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <div className="eventDets py-4 mt-25">
            <div className="container w-11/12 mx-auto">
                <Link to="/"><img src={back} alt='Back' width='50' /></Link>
                <h3 className="mb-5 mt-5 text-xl font-semibold">{event.title}</h3>
                <div className="flex flex-col md:flex-row lg:flex-row gap-8 p-3 shadow">
                    <div className="w-1/5">
                        <img className="posterImg mb-3" src={event.image} alt="poster" width='400' height='300' />
                    </div>
                    <div className="w-4/5">
                        <h5><strong>Location: </strong>{event.location}</h5>
                        <h5><strong>Time: </strong>{event.time}</h5>
                        <h5>
                            <strong>Synopsis: </strong>
                            <div dangerouslySetInnerHTML={{ __html: event.synopsis }}></div>
                        </h5>
                        <h5><strong>Start Date: </strong>{event.startDate}</h5>
                        <h5><strong>End Date: </strong>{event.endDate}</h5>
                    </div>
                </div>
            </div>
            {event.day && (
                <div className="w-11/12 mx-auto border-1 shadow mt-4 p-5 text-white" >
                    <button className="py-5 px-12 bg-yellow-500 rounded-xl cursor-pointer">
                        <p className="text-xl font-medium">
                            <span>{event.day}</span><br />
                            <span>{event.date}</span>
                        </p>
                    </button>
                </div>
            )}

            {event.time1 && (
                <div className="w-11/12 mx-auto border-1 shadow mt-4 p-5 text-white" >
                    <button className="py-8 px-8 bg-red-700 rounded-xl cursor-pointer hover:bg-yellow-600">
                        <p className="text-xl font-medium">
                            <span>{event.time1}</span>
                        </p>
                    </button>

                    {event.time2 && (
                        <button className="py-8 px-8 bg-red-700 rounded-xl cursor-pointer ml-5 hover:bg-yellow-600">
                            <p className="text-xl font-medium">
                                <span>{event.time2}</span>
                            </p>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default EventDetails;
