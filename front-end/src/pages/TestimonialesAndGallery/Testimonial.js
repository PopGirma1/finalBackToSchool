
import React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ReactPlayer from "react-player"
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Avatar from "@material-ui/core/Avatar";
import YoutubeEmbed from "./Youtube";
import './Style/Style.css'
const useStyles = makeStyles((theme) => ({
    feedback: {
        width:'80px',
        height:'200px'
    },
    feedback1: {
     marginTop:'70px',
        width:'400px',
    },
    main:{
        display:'flex',
        flexDirection: 'row',
        marginTop:'20px'
    },
    center:{
        marginRight:'20px'
    },
    logo:{
        width:'auto',
        height:'200px'
    },
    bottom:{
        marginTop:'20px'
    },
    contact:{
        marginTop:'20px',
        marginBottom:'30px'
    },
    testimonial:{
        display:'flex',
        flexWrap:'nowrap',
        flexDirection:'row',
        flexGrow:'1',
        justifyContent:'space-around',
        marginBottom:'2%'
    },
    paragraph:{
        lineHeight: "1.5",
        padding: "10px",
        fontFamily: "Times New Roman",
        boxSizing: "border-box",
    },


    equal:{
        minHeight:'110%'
    }
}));

function Testimonial(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'32px'}}>
                        ዘርፈ ብዙ ከሆኑት የትመህርት ችግሮቻችን መከካል የትምህርት  ተደራሽነት ፣ፍትሀዊነት ፣ተገቢነት... ወዘተ
                        ጉዳዮች በሀገራችን ጎልተው የሚስተዋሉ ሲሆን በተለይም ደግሞ ጥራት  ከቅድመ መደበኛ እስከ ከፍተኛ የትምህርት
                        ተቋማት ዛሬም ድረስ ያልተመለሰ ቁለፍ ጉዳይ ሆኖ ይገኛል ። ከላይ ዘርዘር ያደረግናቸው መሰረታዊ
                        የትምህርት ችግሮች በመንግሥት አልያም በተወሰኑ አካላት የሚፈቱ ሳይሆን የሁሉንም ርብርቦሽ የሚጠይቅ ነው።
                        ስለሆነም ባክ ቱ ስኩል ፕሮጀክት በዚህ ዘርፍ እያደረገ ያለው ሀገራዊ እንቅስቃሴ ሊበረታታ እና ሊደገፍ ይገባል እላለሁ ።
                        ቢንያም ገብረየሱስ  የትምህርት ባለሙያ ...በከፍተኛ ትምህርት ተቋማት መምህር ፣
                        ተመራማሪ እና አሰልጣኝ( BA MA & M.Ed  in Educationally Planning and Management,
                        Curriculum and Instruction, Early Childhood Care and Education consultant
                        and instructor at Welytasodo University, AAU, and Kotebe Metropolitan Universty
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        በዚህ ክ/ዘመን ከሁሉም በላይ  የሰው ልጅ ዋንኛው ህላዌ  ትምህርት ነው።
                        ዓለም በዕውቀት ከፍታ የምትበርም ሆናለች። ምርምሩ በመርቀቁ  ከምድሩ፣
                        ከጠፈሩም አዳዲስ ግኝቶች የሚፈላለትና የሚፈካለት ትውልድ ላይ ነን።
                        በየዓመቱ በአማራጭ የትምህርት መርጃ ቁሳቁስና ትምህርት ቤቶችን ለመምረጥ
                        የሚያስችል አውደ ርዕይ በማዘጋጀት ሰፊ ልምድ ካለው ድርጅት ጋር ዛሬም ስሰራ ደስተኛ ነኝ።
                        ጌታቸው ዓለሙ
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        “We have found the education
                        platform quite beneficial to
                        promote the Alpha University College
                        to the needy from all over the country.
                        The side ways workshops are also very
                        productive to share experiences,
                        to promote new services and
                        work with potential practitioners from all
                        over the globe. Thank you Back to School Ethiopia Expo, keep it up!”
                        Tesfanesh Ayele
                        Public Relation officer
                        Alpha University College
                    </p>
                </CardContent></Card></div>

            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        The Back to School program has
                        been extremely helpful and supportive of
                        the Regina Family Center. We have participated a
                        few years in a row, met many allies and partners!
                        There is no platform of this kind and caliber in Ethiopia.
                        Very grateful to be part of this circle and promote education.
                        Heran Tadesse founder of Heran’s Yoga & the Regina Family Center
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                   <p className={classes.paragraph}>
                       የተከበራችሁ ተማሪዎች ፣ አስተማሪዎች ፣ወላጆች፣ነጋዴዎች፣ድርጅቶች መልካም አጋጣሚ
                       በጊዜያችን ምርጥ እና አስፈላጊ የሆነ አውደ ርእይ ትምህርት ቤት፣ ኮሌጅ ፣ ዩኒቨርስቲ ፣የትምህርት
                       ሙሉ ግብአት አቅራቢ ተሰባስበው መተዋወቂያ እና ትስስር መፍጠሪያ አውደ ርእይ
                       በኑስፊር በመቅረቡ ደስ እያለኝ በዚህ ላይም በመሳተፌ ታላቅ ኩራት ይሰማኛል ።


                       ነብዩ  አይናለም
                       ሜካኒካል ኢንጅነር እና ማርኬቲንግ ማናጀር
                   </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        I attempted to watch the back-to-school exhibition.
                        It is beneficial and valuable for our country.
                        Those who specialize in various fields can share their culture.
                        It comprises from Abnet schooling to modern kind of educational
                        expo with numerous technologies. The additional fascinating
                        thing is pupils up to grown-ups can take part in. This kind of
                        platform has to make frequently for the improvement of our nation.

                        Name: Zenebu Melaku
                        School: Etege Menen Girls Boarding school
                        Grade 11
                    </p>
                </CardContent></Card></div>
            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'0px',width:'102.7%'}}>
                        ''Back to school Ethiopia expo gives
                        an excellent opportunity to students and
                        many education centers to interact and exchange
                        knowlages and expose young children to technology for bright tomorrow of Ethiopia''

                        Name; Eden Ambelu Tadesse
                        Grade; 11
                        School name; Etege Menen girls' boarding school
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'100px'}}>
                        In my view adapting this kind of unique and very useful Platform is important
                        not only for students but also it has significant role in country technological
                        and educational development.
                        In this 21th century, most of world country advanced their education by technologies, this platform also help our country by maintaining sustainable educational process and help not to be disturbed because of different problem like pandemics.
                        Since it is very easy and accessible to whom concerned, it can create strong competent students to other world. Also help them to know different technologies and advanced their research which has considerable role in countries development.
                        Furthermore it can create strong tie or relation with  other countries.
                        እንደዚህ በአይነቱ ለየት ያለ ጠቃሚ የመማሪያ ዘዴ ማዘጋጀት ለተማሪዎች ብቻ ሳይሆን እንደ ሀገር በጣም ጠቃሚ ነው።  በ21ኛው ክፍለ ዘመን እና አለም በተራቀቀበት ግዜ የተለያዩ ችግሮች ሲገጥሙ ትምህርትን በአካል ብቻ ሳይሆን በበይነመረብ በማዳረስ የትምህርት ስርአቱ እንዳይዛባ ይደረጋል።
                        ከዚህም በተጨማሪ ተማሪዎች የተለያዩ ቴክኖሎጂዎች እንዲያውቁና ተግባራዊ እንዲያደርጉ ይረዳል። ይህ ደግሞ የሀገርን ኢኮኖሚ አንድ እርምጃ ወደፊት ይወስዳል።
                        ተደራሽነቱ የላቀ በመሆኑ ተማሪዎችን ከተለያዩ የአለም ሀገራት ጋር የማገናኘት አቅሙ ላቅ ያለ ነው። በዚህም ተማሪዎች ከአለም አቀፍ ማህበረሰብ ጋር ተወዳዳሪ እንዲሆኑ ያደርጋቸዋል።
                        Name        Danat Gutema Seyoum
                        From         Etege Menen Girls    Boarding Secondary School.
                        Grade    12
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'4px'}}>
                        ETEGE MENEN GIRLS BOARDING SECONDARY SCHOOL
                        Yeabsira Desalegn I hope this kind of international expo has it's own advantage on our country, as well as for the community. It develop
                        the inter relation among the participants in the expo and great opportunities for individuals who have interest on it.
                    </p>
                </CardContent></Card></div>
            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                        <img src="/asset/img/feedback.jpg" width="600px" height="360px"/>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'0px'}}>
                        I have witnessed the first Back to
                        School Ethiopia Expo back in 2017 August as
                        a volunteer from Rotaract Club of Mella.
                        The team worked towards making a difference on
                        the quality of education in commitment of educational
                        development. It continues to do so in the coming year,
                        and I believe such programs are key to elevate the inclusivity of indigenous knowledge.

                        Sosina Tesfahun
                        Rotaract Club of Mella 2018/19 President
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                  <p className={classes.paragraph} style={{paddingBottom:'22px'}}>
                      ውድ የተማሪ ቤተሰቦች፤
                      እንደ ወላጅና የትምህርት ባለሙያ መስከረም ሲጠባ የማስበው የነገ
                      ሀገር ተረካቢ ልጄ ነገውን ዛሬ እንዲሰራ የሚያስችለውን አስተማማኝ
                      ዕውቀትና ክህሎት የሚያገኝበትን ማፈላለግ ነው። በፈጣን ለውጥ በምትጓዘው
                      ዓለም ውስጥ ትክክለኛና ወቅታዊ መረጃ ማግኘት የጉዞ መስመርን ለመወሰን ይረዳል።
                      የትምህርቱ ቤተሰብ ከብዙ አማራጮች የሚበጀውን እንዲመርጥ የሚያስችል የንዲህ
                      ዓይነቱን ዐውደ ርዕይ ጠቀሜታው የጎላ ነው። በመሆኑም አዘጋጁ abc..... ምስጋና ሊቸረው ይገባል ።
                      ደሳለኝ ሳሙኤል፣
                      በሣይንስና ከፍተኛ ትምህርት ሚኒስቴር የዓለም አቀፍ ግንኙነት፣ትብብርና ትስስር ዳይሬክተር ጄኔራል
                      Photo sent via email.
                  </p>
                </CardContent></Card></div>
            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                 <p className={classes.paragraph}>
                     I have known back to school expo for 3 years now.
                     It initiated a new platform where people can
                     see the different institutes that are available
                     for learning and companies which serve educational
                     materials. The expo doesn't only include schools but other
                     initiatives that are based on education like extra curricular
                     activities, scholarship applying methods, and others that
                     help students grow holistically. I find the platform
                     so beneficial for students, parents, teachers and anyone who
                     is interested in learning and learning methods as it provides a
                     space to see what is available in the educational sector of Ethiopia.
                     Ephrata ashebir, former exhibitor
                 </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'10px',width:'115%'}}>
                        ውድ የትምህርትና ባሕል ቤተሰቦች፣ አዲስ የትምህርት ዘመን ሲጀመር ለተማሪዎችና ቤተሰቦች ብሩህ ተስፋ የሚሰጥ ሲሆን ለነዚህም አማራጭ የትምህርት
                        መርጃ ቁሳቁስና ትምህርት ቤቶችን ለመምረጥ የሚያስችል አውደ ርዕይ በማዘጋጀት ሰፊ ዕድል የሚሰጥ ድርጅት ጋር በመተባበሬ ከፍተኛ እርካታ ይሰጠኛል።
                        ዳዊት ይፍሩ
                        የኢትዮጵያ ሙዚቃ ዘርፍች ማኅበራት ህብረት
                        ፕሬዚዳንት
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        Testimony from Wedalat Gedamu, to be coped as well.
                        ከላይ በርእሱ የተጠቀሰው ርእስ በራሱ፣ አጓጊና ልብ አንጠልጣይ ሆኖብኛል፤
                        እኔ በሕይወት ዘመኔ ከገጠሙኝ ሂደቶች ሁሉ፣ በልጅነት ጊዜ በትምህርት እንዳሳለፍ
                        ኩ ት ዕድሜ ፣ የምወደውና ዛሬም ድረስ የምናፍቀው ዘመን የለኝም፤ ለአንድ ታዳጊ
                        ትምህርት ቤቱ ማለት የጋራ ቤቱ፣ የዕውቀት ቤቱ፣ አብሮ የመኖር መለማመጃው፣
                        ተካፍሎ የማደር መድረኩ፣ የበጎ ፈቃድ አምባሳደርነቱ መገብያ መድረክ ናት፤
                        በትምህርት ቤት እርሳስ፣ ወረቀት፣ ስክርቢቶ፣ ደብተር ከመዋዋስ ጀምሮ፣ በእያንዳንዱ
                        ተማሪ ኮሮጆ ይሁን በኪስ ወይም በጉንፍ ከሚያዝ ቆሎና ዳቦ ድረስ ፣ ተካፍሎ የሚቋደሱበት፣ ሀብት መጋራትን መማ ማ ሪያ ነው ብዬ አምናለሁ ፡፡
                        ትምህርት ቤት ለተማሪ፡- የማንነት መቀረጫ፣ የሕልም መጸነሻ፣ የምኞት መገለጫና የዚያ ሁሉ በጎ ነገር ማስቻያ እና የስንቅ ማዘጋጃ ቤት እንደሆነ ይሰማኛል፡፡
                        ውድአላት ገዳሙ( ደራሲ)፣
                        *Robel Bekele Kebede* *
                        *
                        *C.E.O*
                        *Noosphere Affairs PLC*
                        *T: +251 11 833 2334*
                        *T/WApp: +251 974 082 037*
                    </p>
                </CardContent></Card></div>
            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                   <p className={classes.paragraph} style={{paddingBottom:'0px',paddingLeft:'0px',paddingRight:'0px'}}>
                       this is a testimony from Sinisawe
                       "From humble beginnings,
                       I have witnessed Back to School
                       Ethiopia has become one of the few
                       successful educational platforms in Ethiopia.
                       The constant inspiration of the founder
                       has allowed the platform to pass through
                       challenges to bring together diverse stakeholders
                       and key figures in the Ethiopian education sector
                       to re-examine our collaboration and leverage local wisdom
                       in knowledge transfer. I am confident Back to School will
                       continue to play an important role for the betterment of
                       the overall educational system." Sinshaw Alemu, Chief Operations Officer, Iceaddis.
                       *Robel Bekele Kebede* *
                       *
                       *C.E.O*
                       *Noosphere Affairs PLC*
                       *T: +251 11 833 2334*
                       *T/WApp: +251 974 082 037*
                   </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'22px'}}>
                        thsi is a testimony form Yosef, and I sent the photo via telegram
                        When I first joined the Back to school team it had already a noble goal.
                        For years the organization had been promoting, and creating connections,
                        among stakeholders of the education industry, both locally and internationally.
                        Due to the large scope of the project it targeted students and parents from kindergarten to college level. It has been successful in attracting international partners as well as national institutions and policy makers. It had already organized a variety of expos in landmark locations in the city.
                        That said, now more than ever is when the B2S project can have its most significant impact. The past year has shown the world the cracks in our systems. The education sector was significantly hurt as kids couldn't go to school and distant education was an experiment put together in the last minute.
                        Every year we spend without putting our heads together in solving the problems of the industry is a generation lost. That is why the goals of the back to school project are ever more critical to the nation and the world.
                        I highly recommend that we use this platform to make an impact on all sectors of the country's socio-economy.
                        *Robel Bekele Kebede* *
                        *
                        *C.E.O*
                        *Noosphere Affairs PLC*
                        *T: +251 11 833 2334*
                        *T/WApp: +251 974 082 037*
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p style={{paddingBottom:'10px'}}>
                        this is a testimony from Haylat, in the photo, he is the one standing beside Megabi Haddis Esetu, cope it solo.
                        ትምህርት ቤት ገብታችሁ ለመማር ተምራችሁ ለማወቅ አውቃችሁ ለመለወጥ አዲሱን የትምህርት ዘመን የምትጠብቁ እውቀትን የምትሹ የተማሪዎችና የአስተማሪዎች ቤተሰብ የሆናችሁ መልካሙንና የተሻለውን የትምህርት መርጃ ቁሳቁስና ትምህርት ቤቶችን ለመምረጥ የሚያስችል አውደ ርዕይ በማዘጋጀት ሰፊ ዕድል የሚሰጥ ድርጅት ጋር በመተባበሬ ከፍተኛ እርካታ ይሰጠኛል።”
                        ኃይለልዑል አምባው በኢ/ኦ/ተ/ቤ/ክ መምህረ ወንጌልና የማህበራዊ ሕይወት አማካሪ
                        *Robel Bekele Kebede* *
                        *
                        *C.E.O*
                        *Noosphere Affairs PLC*
                        *T: +251 11 833 2334*
                        *T/WApp: +251 974 082 037*
                    </p>
                </CardContent></Card></div>
            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        This is a testimony from Neway from Pawlos Medical College. In the photo, he is the one with a hair full cut.
                        " I have seen the latest trends & practices that can add great value when adapted to our country. Such platforms are also a huge asset to promote tourism & build cultural ties with friendly nations, as has been the case in similar international educational exhibitions".
                        *Robel Bekele Kebede* *
                        *
                        *C.E.O*
                        *Noosphere Affairs PLC*
                        *T: +251 11 833 2334*
                        *T/WApp: +251 974 082 037*
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'33px'}}>
                        This is a testimony form Ato Teklu from Germen Church School
                        “We have witnessed that Back to School Ethiopia has become one of the few educational platforms in Ethiopia that managed to bring different and key stakeholders together at one place to enhance skill and knowledge transfer. As a German Church School, some of our students with disabilities and teachers had the honor to participate in two such platforms in which they got the chance to present their educational works, karate skills and innovations to the public. This in addition was a very important platform to learn from best practices of other partaking organizations.”
                        *Robel Bekele Kebede* *
                        *
                        *C.E.O*
                        *Noosphere Affairs PLC*
                        *T: +251 11 833 2334*
                        *T/WApp: +251 974 082 037*
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph} style={{paddingBottom:'10px',width:"105%"}}>
                        This is a testimony form Ato Fissha
                        Fisseha Asres | Owner Advisor
                        Ethiopian Skylight Hotel
                        Back to School Expo is one
                        of it's kind that helps our Children to get ready
                        for the new Academic year
                        and more so to make it part of their culture to make Education a top priority.
                        *Robel Bekele Kebede* *
                        *
                        *C.E.O*
                        *Noosphere Affairs PLC*
                        *T: +251 11 833 2334*
                        *T/WApp: +251 974 082 037*
                    </p>
                </CardContent></Card></div>
            </div>
            <div className={classes.testimonial}>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        For any parent one of the most difficult decision to make for their kids is picking the right place for them to learn. The worry starts way before the kids are at age to start school. I believe 'Back to School Ethiopia Expo' has the right mix of solutions to ease the hustle and worry of parents. It also creates the right platform for Educators to position themselves and be fairly visible amongst their competitors in the sector.

                        I applaud the organisers for putting together such an Expo that equally benefits parents and the industry players.

                        Mekedela Mekuria Hailu
                        Business and Finance Coach, E4Impact
                        St. Mary’s University
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        Back to school እያደረገ ያለውን አውደርዕይ ለማየት ሞክሪያለው ለአንድ ሀገር ማደግ ትምህርት ቁልፍ ነገር ስለሆነ በደንብ ሊሰራበት ይገባል። እናም እንደዚህ አይነት የትምህርት አውደርዕዮች ጠቃሚ ናቸው። የግዕዝ ቋንቋ እንዲስፋፋና እንዳይሞት ከቤተክርስቲያን ውጪ ሁላችንም ኢትዮጵያውያን ርብርብ ማድረግ አለብን ብዙ ቀደምት መፅሐፍት በዚሁ ቋንቋ ስለተፃፉ። የአብነት ተማሪዎችን ማካተቱ ደስ ብሎኛል። እናም በተጨማሪ ለቴክኖሎጂና ፈጠራዎች እንዲተዋወቁ በር ይከፍታል።

                        Kidist Segute
                        Menen Bordind School
                        Grade/ 12
                    </p>
                </CardContent></Card></div>
                <div><Card><CardContent className={classes.equal}>
                    <p className={classes.paragraph}>
                        “It doesn’t matter what you want to do. Do you want to develop yourself? Do you want to create impact? Do you want to have fun in your life? It all starts with education! Without education, these goals will be unattainable.
                        Back to school Ethiopia Expo is a good example of an organization that shares this view. They create equal opportunities for everyone, young or old, making education accessible to everyone. I am proud to be in contact with this organization and to be able to offer assistance if necessary.”

                        Gebert Janssen, author, lecturer, event specialist and CEO Eventarchitect-group
                    </p>
                </CardContent></Card></div>
            </div>



            <Card><CardContent className={classes.equal}>
                <form>
                <Typography>Can you do this for events like us! Yes you can! !</Typography>
                <FeedbackIcon color="primary"  className={classes.feedback}></FeedbackIcon>
                <TextField id="outlined-basic" label="text your feedback here " variant="outlined" className={classes.feedback1} />
                <Button variant="contained" color="primary">Submit</Button>
                </form>
            </CardContent></Card>
            <Typography variant="h5" style={{marginTop:'20px'}}>  RECENT EXPOS </Typography>

            <div className={classes.main}>
                <Card className={classes.center}><CardContent >
                    <Typography>B2SXET2022</Typography>
                    <Avatar alt="Remy Sharp" src="/asset/img/logo1.jpg" className={classes.logo}/>
                </CardContent></Card>
                <Card className={classes.center}><CardContent >
                    <Typography>B2SXET2019</Typography>

                     <YoutubeEmbed></YoutubeEmbed>

                </CardContent></Card>
            </div>

            <div className={classes.main}>
                <Card className={classes.center}><CardContent className={classes.equal}>
                    <Typography>B2SXET2018</Typography>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    />

                </CardContent></Card>
                <Card><CardContent className={classes.equal}>
                    <Typography>B2SXET2017</Typography>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                    />
                </CardContent></Card>
            </div>

            <div className={classes.bottom}>
                <Card><CardContent className={classes.equal}>
                    Contact Information

                    <Card><CardContent className={classes.equal}>
                        Company: Noosphere Affairs
                        Trading P.L;C
                        Address:   Firdu Commercial
                        Building, 3rd Floor
                        Office no 308.

                        P.O.box: 54178
                        Tel: 1  +251-974 082036
                        Tel: 2  +251-974 082037
                    </CardContent></Card>
                    <Card className={classes.contact}><CardContent className={classes.equal}>
                        Email:
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            digital@backtoschoolethiopia.org
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            back2schooleth@gmail.com
                        </Link>
                        <Typography>What’s up No:     +251 974082037</Typography>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            www.backtoschoolethiopia.org
                        </Link>
                    </CardContent></Card>

                    <Card ><CardContent className={classes.equal}>
                        <Typography>Follow us on: </Typography>
                        <FacebookIcon color="primary"></FacebookIcon>
                        <YouTubeIcon color="primary"></YouTubeIcon>
                        <LinkedInIcon color="primary"></LinkedInIcon>
                        <TwitterIcon color="primary"></TwitterIcon>
                        <InstagramIcon color="primary"></InstagramIcon>
                    </CardContent></Card>
                </CardContent></Card>
                <Card className={classes.bottom}><CardContent className={classes.equal}>
                    <Typography variant="h5"> Welbo/Line/Wechat Virtual Platforms</Typography>
                    Zoom/Goggle Meet/Skype
                </CardContent></Card>

            </div>

        </div>
    );
}

export default Testimonial;
