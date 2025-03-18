import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
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

import kandata1 from '../assets/mandala-images/kandata/Utervision-Kandata1.jpg'
import kandata2 from '../assets/mandala-images/kandata/Utervision-Kandata2.jpg'
import kandata3 from '../assets/mandala-images/kandata/Utervision-Kandata3.jpg'
import kandata4 from '../assets/mandala-images/kandata/Utervision-Kandata4.jpg'
import kandata5 from '../assets/mandala-images/kandata/Utervision-Kandata5.jpg'
import kandata6 from '../assets/mandala-images/kandata/Utervision-Kandata6.jpg'
import kandata7 from '../assets/mandala-images/kandata/Utervision-Kandata7.jpg'
import kandata8 from '../assets/mandala-images/kandata/Utervision-Kandata8.jpg'
import kandata9 from '../assets/mandala-images/kandata/Utervision-Kandata9.jpg'
import kandata10 from '../assets/mandala-images/kandata/Utervision-Kandata10.jpg'
import erina from '../assets/mandala-images/kandata/Erina Saji-Profile.jpg'

import 图片1 from '../assets/mandala-images/mochou/图片1.jpg'
import 图片2 from '../assets/mandala-images/mochou/图片2.jpg'
import 图片3 from '../assets/mandala-images/mochou/图片3.jpg'
import 图片4 from '../assets/mandala-images/mochou/图片4.jpg'
import 图片5 from '../assets/mandala-images/mochou/图片5.jpg'
import 图片6 from '../assets/mandala-images/mochou/图片6.jpg'
import 图片7 from '../assets/mandala-images/mochou/图片7.jpg'
import 图片8 from '../assets/mandala-images/mochou/图片8.jpg'
import 图片9 from '../assets/mandala-images/mochou/图片9.jpg'
import 图片10 from '../assets/mandala-images/mochou/图片10.jpg'
import Dramaturge_Director_Li_Jun from '../assets/mandala-images/mochou/Dramaturge Director Li Jun.jpg'

import aboriginal1 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 1.jpg'
import aboriginal2 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 2.jpg'
import aboriginal3 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 3.jpg'
import aboriginal4 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 4.jpg'
import aboriginal5 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 5.jpg'
import aboriginal6 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 6.jpg'
import aboriginal7 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 7.jpg'
import aboriginal8 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 8.jpg'
import aboriginal9 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 9.jpg'
import aboriginal10 from '../assets/mandala-images/aboriginal/ABORIGINAL CRY 10.jpg'
import THOUDAM from '../assets/mandala-images/aboriginal/THOUDAM VICTOR.jpg'

import asch1 from '../assets/mandala-images/asch/Asch 1.jpeg'
import asch2 from '../assets/mandala-images/asch/Asch 2.jpg'
import asch3 from '../assets/mandala-images/asch/Asch 3.jpg'
import asch_director_1 from '../assets/mandala-images/asch/Asch director 1.jpg'
import asch_director_2 from '../assets/mandala-images/asch/Asch director 2.jpg'

import antigone1 from '../assets/mandala-images/antigone/Antigone1.jpg'
import antigone2 from '../assets/mandala-images/antigone/Antigone2.jpg'
import antigone3 from '../assets/mandala-images/antigone/Antigone 3.jpg'
import antigone4 from '../assets/mandala-images/antigone/Antigone 4.jpg'
import antigone5 from '../assets/mandala-images/antigone/Antigone 5.jpg'
import antigone6 from '../assets/mandala-images/antigone/Antigone 6.jpg'
import Iran from '../assets/mandala-images/antigone/Iran_Director.jpg'

import tamasha_1 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0001.jpg'
import tamasha_2 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0002.jpg'
import tamasha_3 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0003.jpg'
import tamasha_4 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0004.jpg'
import tamasha_5 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0005.jpg'
import tamasha_6 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0006.jpg'
import tamasha_7 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0007.jpg'
import tamasha_8 from '../assets/mandala-images/tamasha/tamasha photos pdf_page-0008.jpg'
import subin from '../assets/mandala-images/tamasha/Subin kk.jpg'
import neelam from '../assets/mandala-images/tamasha/Neelam mam.jpg'

import wisdom1 from '../assets/mandala-images/wisdom/IMG(1).jpg'
import wisdom2 from '../assets/mandala-images/wisdom/IMG(2).jpg'
import wisdom3 from '../assets/mandala-images/wisdom/IMG(3).jpg'
import wisdom4 from '../assets/mandala-images/wisdom/1741665870837.jpg'

import jhoda1 from '../assets/mandala-images/jhoda/1.jpg'
import jhoda2 from '../assets/mandala-images/jhoda/2.jpg'
import jhoda3 from '../assets/mandala-images/jhoda/3.jpg'
import jhoda4 from '../assets/mandala-images/jhoda/44w.jpg'
import jhoda5 from '../assets/mandala-images/jhoda/6.jpg'
import jhoda6 from '../assets/mandala-images/jhoda/8.jpg'
import jhoda7 from '../assets/mandala-images/jhoda/9g.jpg'
import jhoda8 from '../assets/mandala-images/jhoda/FB_IMG_1741491240403.jpg'

import normal1 from '../assets/mandala-images/new normal/NITFEST web image.jpg'
import normal2 from '../assets/mandala-images/new normal/New Normal Final.jpg'
import normal3 from '../assets/mandala-images/new normal/gunjan dixit photo (1).jpg'
import normal4 from '../assets/mandala-images/new normal/Morna.jpg'

import sama1 from '../assets/mandala-images/sam chako/DSC_6218~2.jpg'
import sama2 from '../assets/mandala-images/sam chako/DSC_6220~2.jpg'
import sama3 from '../assets/mandala-images/sam chako/DSC_6234~2.jpg'
import sama4 from '../assets/mandala-images/sam chako/Director_SamChako.jpg'

import lem1 from '../assets/mandala-images/lememe nepal/1.jpg'
import lem2 from '../assets/mandala-images/lememe nepal/2.jpg'
import lem3 from '../assets/mandala-images/lememe nepal/3.jpg'
import lem4 from '../assets/mandala-images/lememe nepal/4.jpg'
import lem5 from '../assets/mandala-images/lememe nepal/5.jpg'
import lem6 from '../assets/mandala-images/lememe nepal/6.jpg'
import lem7 from '../assets/mandala-images/lememe nepal/7.jpg'
import lem8 from '../assets/mandala-images/lememe nepal/8.jpg'
import lem9 from '../assets/mandala-images/lememe nepal/Pashupathi rai.jpg'

import jinju1 from '../assets/mandala-images/jinju/三岔口 (1).png'
import jinju2 from '../assets/mandala-images/jinju/三岔口 (2).png'
import jinju3 from '../assets/mandala-images/jinju/四郎探母 (1).png'
import jinju4 from '../assets/mandala-images/jinju/四郎探母 (2).png'
import jinju5 from '../assets/mandala-images/jinju/小宴 (1).png'
import jinju6 from '../assets/mandala-images/jinju/小宴 (2).png'
import jinju7 from '../assets/mandala-images/jinju/徐策跑城 (1).png'
import jinju8 from '../assets/mandala-images/jinju/徐策跑城 (2).png'
import jinju9 from '../assets/mandala-images/jinju/打神告庙 (1).png'
import jinju10 from '../assets/mandala-images/jinju/打神告庙 (2).png'
import jinju11 from '../assets/mandala-images/jinju/林冲夜奔 (1).png'
import jinju12 from '../assets/mandala-images/jinju/林冲夜奔 (2).png'
import jinju13 from '../assets/mandala-images/jinju/水漫金山 (1).png'
import jinju14 from '../assets/mandala-images/jinju/水漫金山 (3).png'
import jinju15 from '../assets/mandala-images/jinju/水漫金山 (4).png'
import jinju16 from '../assets/mandala-images/jinju/水漫金山 (5).png'
import jinju17 from '../assets/mandala-images/jinju/活捉三郎 (1).png'
import jinju18 from '../assets/mandala-images/jinju/活捉三郎 (2).png'
import jinju19 from '../assets/mandala-images/jinju/钟馗嫁妹 (1).jpg'
import jinju20 from '../assets/mandala-images/jinju/钟馗嫁妹 (2).png'
import jinju21 from '../assets/mandala-images/jinju/Tao Chen_s photo.jpg'

import next_svg from '../assets/svg/next-1.svg';
import previous_svg from '../assets/svg/previous-1.svg';

// Event Data List
const events = [
    {
        id: 1,
        title: "KANDATA & SAKUNTALA",
        image: bg_1,
        images: [kandata1, kandata2, kandata3, kandata4, kandata5, kandata6, kandata7, kandata8, kandata9, kandata10, erina],
        description: "Two timeless tales intertwine in this theatrical performance, bringing together the Buddhist parable of Kandata’s torment in hell and the revered Mahabharata story of Shakuntala. Though their fates will never cross, they are bound by a shared struggle—each resisting the destiny imposed upon them. Rooted in the indigenous spiritual beliefs of Asia, this performance invites audiences to reflect on humanity’s coexistence with the divine and nature in a chaotic world. The play is a joint production of artists from Japan and Nepal and is based on stories written by Kalidasa and Akutagawa Ryunosuke.",
        start_date: "Mar 20, 2025",
        end_date: "Mar 20, 2025"
    },
    {
        id: 2,
        title: "MOCHOU MOCHOU",
        image: bg_2,
        images: [图片1, 图片2, 图片3, 图片4, 图片5, 图片6, 图片7, 图片8, 图片9, 图片10, Dramaturge_Director_Li_Jun],
        description: "with palace maid Mo Chou, whose beauty and intellect captivate him. When Xu learns her father was executed by a corrupt minister and she was sold into servitude, he defies his grandmother's arranged marriage to Prime Minister's daughter Cai Yun. Their elopement fails, leading to Mo's public humiliation. Consumed by grief, Xu becomes critically ill. Cai bribes doctors to use Mo's eyes as a cure, forcing her to gouge them out selflessly. Escaping captivity, Mo drowned herself in despair, followed by Xu in suicide. Transformed into twin lotuses, they eternalize their tragic love in mortal bonds. The play critiques feudal oppression and celebrates selfless devotion.",
        start_date: "Mar 20, 2025",
        end_date: "Mar 20, 2025"
    },
    {
        id: 3,
        title: "ABORIGINAL CRY",
        image: bg_3,
        images: [aboriginal1, aboriginal2, aboriginal3, aboriginal4, aboriginal5, aboriginal6, aboriginal7, aboriginal8, aboriginal9, aboriginal10, THOUDAM],
        description: "Aboriginal Cry opens with the harmonious connection between the aborigine and their land—rivers, forests, paddy fields, lakes, and hills passed down by ancestors, expressed through sounds and movement. But this sacred inheritance is threatened by the arrival of powerful corporate forces, backed by the state. Tensions rise as the aborigines confront these forces in a clash of sound and fury. The aborigines fight to protect their land, culture, and values, while the brute forces respond with oppressive, discordant noise. Ultimately, the aborigines are displaced to barren land, stripped of their heritage, and overcome with helplessness. In the face of such loss, their anguished cry echoes—a cry of pain, yet of resilience, as they vow to fight for their roots. The play tries to depict the hardships of displaced people and communities affected by 6 mega dams in Manipur in India.",
        start_date: "Mar 21, 2025",
        end_date: "Mar 21, 2025"
    },
    {
        id: 4,
        title: "ASCH",
        image: bg_4,
        images: [asch1, asch2, asch3, asch_director_1, asch_director_2],
        description: "In the country of “Matetssamachtawch”, plagued by a series of absurd events, Madame Cesscu Ciao, editor-in-chief of the newspaper “Beyond Imagination”, assigns her team to cover the recent events. Their investigations explore the sense of injustice that links different characters, offering a psychosocial perspective on events based on scientific experiments. As the action unfolds, six actors take on alternating roles, combining dramatic performance and theatrical dance. The play is produced by Association Carmen pour la culture et les arts.",
        start_date: "Mar 21, 2025",
        end_date: "Mar 21, 2025"
    },
    {
        id: 5,
        title: "ANTIGONE",
        image: bg_5,
        images: [antigone1, antigone2, antigone3, antigone4, antigone5, antigone6, Iran],
        description: "This solo psychological drama delves into the internal struggles of a character who confronts a repressed dimension of his own personality. Initially in conflict, these two aspects of himself gradually move toward understanding, acceptance, and coexistence. As equilibrium is reached, the sudden arrival of a third presence—symbolizing yet another layer of his subconscious—triggers a moment of surprise and transformation, deepening the exploration of identity and self-knowledge.",
        start_date: "Mar 22, 2025",
        end_date: "Mar 22, 2025"
    },
    {
        id: 6,
        title: "CHARMING JINJU OPERA EPISODES",
        image: bg_6,
        images: [jinju1, jinju2, jinju3, jinju4, jinju5, jinju6, jinju7, jinju8, jinju9, jinju10, jinju11, jinju12, jinju13, jinju14, jinju15, jinju16, jinju17, jinju18, jinju19, jinju20, jinju21],
        description: "The performance opens with the mythological romance of Zhong Kui Marrying His Sister, where flame-spouting rituals and shapeshifting choreography create an enchanting atmosphere. The poignant drama The Fourth Son Visits His Mother follows, unveiling heart-wrenching emotions through the rhythmic head-swinging (Shaozi Gong) technique. Other highlights include Praying for Justice from Sea God Temple, a haunting tale of betrayal and hallucination expressed through flowing water-sleeve dances, and Lin Chong’s Night Run, a gripping escape scene that demands both acrobatic skill and vocal precision. This captivating gala performance immerses audiences in the vibrant world of Shanxi Jinju Opera, a national intangible cultural heritage renowned for its soul-stirring vocals, intricate costumes, and dynamic stage techniques. The program features nine iconic episodes from both classic and contemporary Jinju repertoire, each showcasing the genre's rich cultural legacy.",
        start_date: "Mar 22, 2025",
        end_date: "Mar 22, 2025"
    },
    {
        id: 7,
        title: "TAMASHA",
        image: bg_7,
        images: [tamasha_1, tamasha_2, tamasha_3, tamasha_4, tamasha_5, tamasha_6, tamasha_7, tamasha_8, subin, neelam],
        description: 'The play presents interconnected stories by Sadat Hassan Manto, each examining the human condition in the face of conflict and survival. In the first story "Tamasha", a family is overwhelmed by war and flees in search of safety. "Ten Rupee" follows a child forced into prostitution, where a man`s regretful transformation takes place after spending a day with her. "Smell" tells of a man haunted by a passionate night shared with a factory worker. In "The Hundred-Watt Power Bulb," a prostitute kills her relentless pimp in a desperate bid for rest. "The Rats of Shahdol" depicts a mother’s lifelong grief after losing her child, whom she had once abandoned. The play ends with "The Dog of Titwal," a tragic tale of a dog caught between two warring nations, rejected by both armies. Each story explores themes of loss, regret, and the enduring impact of conflict on the human spirit.',
        start_date: "Mar 23, 2025",
        end_date: "Mar 23, 2025"
    },
    {
        id: 8,
        title: "WISDOMS OF LIFE",
        image: bg_8,
        images: [wisdom1, wisdom2, wisdom3, wisdom4],
        description: 'Wisdom of Life, explores the lessons that shape us—some gentle, others transformative—each enriching our understanding of what it means to be human. By bringing personal narratives to the stage, we honor life’s complexity, celebrating both struggles and triumphs. In sharing stories, we create a space where every experience, no matter how big or small, resonates with others, reminding us of our shared journey toward meaning and growth.',
        start_date: "Mar 23, 2025",
        end_date: "Mar 23, 2025"
    },
    {
        id: 9,
        title: "Jhoda",
        image: bg_9,
        images: [jhoda1, jhoda2, jhoda3, jhoda4, jhoda5, jhoda6, jhoda7, jhoda8],
        description: 'Jhoda, based on Ganesh Rasik’s novel Akashgangako Otmuni, explores the struggle for land ownership and political manipulation of indigenous communities in eastern Nepal. The story follows Rupama, who uncovers how political parties exploited former soldiers to transfer land to the Jhoda, only to entangle them in a relentless political battle. The play highlights how native inhabitants were reduced to squatters, how political self-interest fractured their unity, and the enduring fight for their rightful land. Through a powerful narrative, Jhoda sheds light on the indigenous perspective and their resilience against systemic dispossession. ',
        start_date: "Mar 24, 2025",
        end_date: "Mar 24, 2025"
    },
    {
        id: 10,
        title: "NEW NORMAL",
        image: bg_10,
        images: [normal1, normal2, normal3, normal4],
        description: [
            'New Normal follows friends Aaravi, Minal, and Smriti as they navigate the past, present, and future after the unexpected arrival of people from the old world—Earth. Why have they come, and how will they adapt? When the trio meets Diya, they quickly realize that their world is about to change in ways they never imagined.<br /><br />',
            'New Normal is an original play which has resulted from an exciting international collaboration between disabled artists in Nepal and Scotland. The play has been developed through "Unwrap", a series of creative development workshops and weaves ideas and new writing from artists in both countries to create a truly collaborative new work of accessible theatre that explores how the tales we tell and the myths we build can define us and our societies. The play creatively embeds access provisions such as Nepali sign language, captioning and audio description.<br /><br />',
            '<b>About the Directors:</b><br /><br />',
            'Morna is a disabled theatre-maker, facilitator, director, dramaturg and mentor- working across a multitude of theatre settings in Scotland and internationally since 2009. Morna is passionate about creating space for people who are currently under-represented within the arts to make the work they want to exist in the world. <br /><br />',
            'Gunjan Dixit is a theatre practitioner, director, and educator specializing in applied theatre and socially engaged performance. A Chevening Scholar with a Master’s from the University of Leeds, she co-founded Phulbari Playback Theatre in Nepal. Her work fosters dialogue through artistic interventions, using theatre as a catalyst for social change. <br /><br />',],
        start_date: "Mar 25, 2025",
        end_date: "Mar 25, 2025"
    },
    {
        id: 11,
        title: "SAMA CHAKO SAMA CHAKO AHIWA HEY",
        image: bg_11,
        images: [sama1, sama2, sama3, sama4],
        description: 'The play is a theatrical exploration of cultural tradition, myth and social reality. It is deeply rooted in the Maithili heritage of Nepal. The story unfolds in a village preparing for Sama-Chakeva, a festival that celebrates the bond between siblings. The villagers create clay figures of mythological characters which magically come to life and engage in conversations reflecting the deep cultural heritage and myths of the community. Amidst the festival`s preparations, the play delves into the lives of real characters. Barkha`s story is particularly poignant. It highlights the themes of love, sacrifice and the societal pressure she faces, culminating in her tragic end. The interplay between the mythological elements and everyday struggles of the villagers offers a layered narrative that critiques societal norms while celebrating cultural traditions. Through its evocative storytelling, the play explores the enduring impact of myths and the complex social dynamics within the village.',
        start_date: "Mar 25, 2025",
        end_date: "Mar 25, 2025"
    },
    {
        id: 12,
        title: "LEMLEMMĀ",
        image: bg_12,
        images: [lem1, lem2, lem3, lem4, lem5, lem6, lem7, lem8, lem9],
        description: [
            'पानीमा खरानी उमालेर कपडा धोएको सम्झिन सक्नुहुन्छ ? पैतालाको टिका लाएर बाटो लाग्ने गर्नुहुन्छ ? जाँड खानु-अघि जुठो लगाइहाल्नुहुन्छ ? कहिले प्रश्न गर्नु भएको छ, यो सब किन र कहिलेदेखि गर्न थाल्नु भएको होला भनी ? माझ किरातका हामीहरूको संस्कारमा मुन्दुम्, मिथक, र मौखिक-परम्परागत-प्रणालीले अत्यन्तै महत्त्व राख्दछ ।<br /><br />',
            'मुन्दुम्, मिथक, र सुनी आएका मौखिक-परम्परागत-प्रणालीको उपज हो— “उम्लिँदो खरानी र लेम्लेम्मा” । मातृसत्तात्मक समाजमा पितृसत्तात्मक विचारको बिउँले सुस्तरी, अन्ततः कसरी ग्रसित पाऱ्यो; यससँगसँगै रैथानी सौन्दर्यलाई कसरी मास्न, र भाँड्न खोज्यो— प्रतीकात्मक प्रतिप्रश्न गर्दछ यो नाटकले ।<br /><br />',
            'समग्रमा यो नाटक; सामान्य निम्न परिवारमा सुनी आएको मिथक, वास्तविकतामा परिणत भयो भने ? देखेको मिठो निदरी/सपना बीभत्स बन्दै गयो भने ? यिनै कुराहरूको सेरोफेरोमा बाँचिरहेका छन्— यो नाटकका पात्रहरू ।<br /><br />'],
        start_date: "Mar 19, 2025",
        end_date: "Mar 19, 2025"
    },
    {
        id: 13,
        title: "MASTER SHOKO & MARGARITA",
        image: bg_13,
        images: [bg_13],
        description: [
            'One day, in the bustling Schönefeld Airport in Germany, Shoko meets Yura, a young Russian man, by chance. Yura has traveled to Berlin to reunite with his girlfriend, but their meeting does not go as planned. Struggling with personal challenges and harboring a deep secret, Yura finds solace in sharing his favorite Russian story, Master and Margarita, with Shoko.<br /><br />',
            'Through a series of short stories that blend reality with fantasy, spirituality with secularism, and music with dance, the performance explores universal themes of love, freedom, and the human condition. As Shoko and Yura’s friendship deepens, the boundaries between their worlds dissolve, revealing a shared space where cultural and personal differences no longer matter.   <br /><br />'],
        start_date: "Mar 23, 2025",
        end_date: "Mar 23, 2025"
    },
];

const AutoImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef(null);

    const changeSlide = (newIndex) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(newIndex);

        setTimeout(() => {
            setIsTransitioning(false);
        }, 700);
    };

    useEffect(() => {
        const startTimer = () => {
            timerRef.current = setTimeout(() => {
                const nextIndex = (currentIndex + 1) % images.length;
                changeSlide(nextIndex);
                startTimer();
            }, 3000);
        };

        startTimer();
        return () => clearTimeout(timerRef.current);
    }, [currentIndex, isTransitioning, images.length]);

    return (
        <div className='relative rounded-t-lg w-full h-[400px] overflow-hidden'>
            {images.map((img, index) => (
                // <img
                //     key={index}
                //     src={img}
                //     alt={`Slide ${index + 1}`}
                //     className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                // />
                <img
                    key={index}
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className={`absolute rounded-t-lg top-0 left-1/2 h-full w-auto object-cover transform -translate-x-1/2 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            <button
                className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 z-10'
                onClick={() => changeSlide((currentIndex - 1 + images.length) % images.length)}
                disabled={isTransitioning}
            >
                <img src={previous_svg} alt='Previous' className='w-6 h-6' />
            </button>
            <button
                className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-75 z-10'
                onClick={() => changeSlide((currentIndex + 1) % images.length)}
                disabled={isTransitioning}
            >
                <img src={next_svg} alt='Next' className='w-6 h-6' />
            </button>

            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => changeSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                    />
                ))}
            </div>
        </div>
    );
};


function Home() {
    return (
        <div className='w-11/12 mt-3 mx-auto p-5'>
            <h2 className='text-3xl font-medium w-full'>Now Showing</h2>
            <div className='flex flex-col gap-5 mt-2'>

                {events.map((event) => (
                    <div key={event.id} className='flex gap-5 flex-col md:flex-row lg:flex-row'>
                        <div className='p-3 w-full md:w-2/5 lg:w-2/5 rounded-lg shadow-lg cursor-pointer hover:scale-101 transition-transform duration-300'>
                            <Link to={`/event/${event.id}`}>
                                <div className='rounded-t-lg w-full h-[400px]'>
                                    <img src={event.image} alt={event.title} className='rounded-t-lg w-full h-full object-cover' />
                                </div>
                                <div className='rounded-b-lg p-3'>
                                    <h2>{event.title}</h2>
                                    {/* <p className='font-thin'>{event.description}</p> */}
                                    <p className='font-thin' dangerouslySetInnerHTML={{ __html: event.description }} />
                                </div>
                                <div className='p-3'>
                                    <p className='border-l px-2'>
                                        <span>{event.start_date}</span><br />
                                        <span>{event.end_date}</span>
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className='p-3 w-full md:w-3/5 lg:w-3/5 shadow-lg rounded-lg'>
                            <AutoImageSlider images={event.images} />
                            <div className='rounded-b-lg p-3 text-center mt-3'>
                                <h2 className='font-bold text-2xl'>{event.title}</h2>
                                <p className='font-thin' dangerouslySetInnerHTML={{ __html: event.description }} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Home;
