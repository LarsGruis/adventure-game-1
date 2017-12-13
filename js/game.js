document.getElementById('level_title').innerHTML = 'Welkom bij deze Adventure Game. Klik op start om het spel te beginnen!';
document.getElementById('option1').innerHTML = "Start";
document.getElementById('option2').style.display = "none";
document.getElementById('option3').style.display = "none";
document.getElementById('wapen').style.display = "none";
document.getElementById('zwaard').style.display = "none";
document.getElementById('blaster').style.display = "none";
document.getElementById('suit').style.display = "none";

function Level1(){
	console.log("Level1");
	document.getElementById('level_title').innerHTML = "Nadat je vliegtuig is neergeschoten, wordt je wakker in de woestijn. Je bent uitgedroogd. Als je achter je kijkt zie je een klein meertje met water, als je voor je kijkt zie je een klein dorpje. Het meertje met water lijkt dichterbij. Wat doe je?";
	document.getElementById('level_title').style.color = "white"; 
	document.getElementById("level_image").src = 'img/woestijn.jpg';
	document.getElementById('option1').innerHTML = "Ga naar het water";
	document.getElementById('option2').innerHTML = "Ga naar de stad";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Uitgedroogd();")
	document.getElementById('option2').setAttribute("onClick", "javascript:Level2();");
}

function Uitgedroogd(){
	console.log("Uitgedroogd");
	document.getElementById('level_title').innerHTML = "Helaas was dit niet de goede keuze. Je bent in een Fata Morgana getrapt. Je hebt niet meer de kracht om naar het dorpje te lopen. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/uitgedroogd.jpg';
	document.getElementById('option1').innerHTML = "Ga naar het water";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "Ga naar de stad";
	document.getElementById('option2').style.display = "none";
}

function Level2(){
	document.getElementById('level_title').innerHTML = "Eenmaal in het dorpje aangekomen lijkt de stad verlaten, maar opeens komen er 2 stormtroopers aangelopen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/tatooine.jpg';
	document.getElementById('option1').innerHTML = "Verstop je";
	document.getElementById('option2').innerHTML = "Val ze aan";
	document.getElementById('option3').innerHTML = "Spreek ze aan";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Level3();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Aanvallen();");
	document.getElementById('option3').setAttribute("onClick", "javascript:Gedoodt();");
}

function Aanvallen(){
	console.log("Doodgeschoten");
	document.getElementById('level_title').innerHTML = "Helaas was dit niet de goede keuze. Je had geen wapens om je vijand mee te doden. Je bent doodgeschoten.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/gedoodt.jpg';
	document.getElementById('option1').innerHTML = "Ga naar het water";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "Ga naar de stad";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
}

function Gedoodt(){
	console.log("Doodgeschoten");
	document.getElementById('level_title').innerHTML = "Helaas was dit niet de goede keuze. De stormtroopers zagen je als een vijand. Je bent doodgeschoten.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/gedoodt.jpg';
	document.getElementById('option1').innerHTML = "Ga naar het water";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "Ga naar de stad";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
}

function Level3(){
	document.getElementById('level_title').innerHTML = "Nadat je je ternauwernood kon verstoppen voor de stormtroopers stuit je op de Mos Eisley kantine. Hier kun je vast wel wat drinken krijgen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/moseisley.jpg';
	document.getElementById('option1').innerHTML = "Loop door";
	document.getElementById('option2').innerHTML = "Ga naar binnen";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option2').setAttribute("onClick", "javascript:Level4();");
	document.getElementById('option1').setAttribute("onClick", "javascript:Doorgelopen();");
}

function Doorgelopen(){
	console.log("Doorgelopen");
	document.getElementById('level_title').innerHTML = "Helaas was dit niet de goede keuze. De kantine was de enige plek waar je nog drinken kon halen voordat het te laat was. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/dood.jpg';
	document.getElementById('option1').innerHTML = "Ga naar het water";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "Ga naar de stad";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
}

function Level4(){
	document.getElementById('level_title').innerHTML = "Binnen kom je Han Solo tegen. Hij geeft je wat drinken en vertelt dat hij hulp kan gebruiken op  Endor.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/hansolo.jpg';
	document.getElementById('option1').innerHTML = "Blijf hier";
	document.getElementById('option2').innerHTML = "Ga naar Endor";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:BlijfHier();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Level5();");
}

function BlijfHier(){
	console.log("BlijfHier");
	document.getElementById('level_title').innerHTML = "Nadat je Han Solo hebt bedankt voor zijn aanbod, vraagt Luke Skywalker of je hem kan helpen bij een missie op Hoth. Dit aanbod accepteer je wel. Hij vraagt aan je om in een Rogue Two te stappen en een AT-AT neer te halen.";
	document.getElementById("level_image").src = 'img/luke.jpg';
	document.getElementById('level_title').style.color = "white";
	document.getElementById('option1').innerHTML = "Stap in";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Stap niet in";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option3').innerHTML = "niks";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:StapIn();");
	document.getElementById('option2').setAttribute("onClick", "javascript:StapNietIn();");
}

function StapIn(){
	document.getElementById('level_title').innerHTML = "Omdat je zo'n goede piloot bent, lukt het je om de AT-AT neer te halen. Terwijl je nog hoog in de lucht bent, zie je dat de Rebel-vrienden van Luke aangevallen worden door troopers van The Empire. Je besluit ze te helpen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/val.jpg';
	document.getElementById('option1').innerHTML = "Schiet vanuit je schip";
	document.getElementById('option2').innerHTML = "Land je schip en help op de grond";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Neergeschoten();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Vechten();");
}

function StapNietIn(){
	document.getElementById('level_title').innerHTML = "Je had geen tijd meer om weg te komen. Doordat je niet in de Rogue Two stapte, is de AT-AT bovenop jou en Luke gaan staan. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/plat.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
}

function Vechten(){
	document.getElementById('level_title').innerHTML = "Na een lang en hard gevecht lijkt het alsof je eindelijk The Empire verslagen hebt. Midden op het slagveld zie je nog een gewonde rebel liggen. Uit de verte zie je ook opeens nog AT-AT's aankomen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/vechten.jpg';
	document.getElementById('option1').innerHTML = "Red de rebel";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Verstop je";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Red();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Verstop();");
}

function Verstop(){
	document.getElementById('level_title').innerHTML = "De AT-AT's zijn langs je gelopen en hebben je niet gezien. Luke Skywalker vraagt je om hem te helpen bij zijn laatste missie.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/red.jpg';
	document.getElementById('option1').innerHTML = "Help Luke";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Verstop je";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Scarif();");
}

var heeftZwaard = false;
function Scarif(){
	document.getElementById('level_title').innerHTML = "Terwijl je samen met Luke op Scarif landt, bevindt zich onder je een reusachtig gevecht. Om het eiland heen hangt een krachtveld waardoor de versterkingen van de rebels niet bij het eiland kunnen komen. Om dit krachtveld uit te schakelen moet je bij de controlekamer zien te komen. Luke geeft je zijn lightsaber om jezelf te kunnen verdedigen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/verwoesting.jpg';
	document.getElementById('option1').innerHTML = "Val eerst de stormtroopers aan";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Ren naar de controlekamer";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').innerHTML = "Geef de lightsaber terug";
	document.getElementById('option3').style.display = "inline";
	document.getElementById('zwaard').style.display = "block";
	document.getElementById('option1').setAttribute("onClick", "javascript:Killed();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Ren();");

	document.getElementById('option2').onclick = function(){
	if(heeftZwaard){
		Ren();
	} else {
		alert("Pak het zwaard!");
	}
	document.getElementById("zwaard").onclick = function(){
		document.getElementById("zwaard").style.display = "none";
		heeftZwaard = true;
		}
}
}

function Ren(){
	document.getElementById('level_title').innerHTML = "Na het uitgeschakelen van een aantal stormtroopers met je lightsaber, lukt het je eidelijk om bij de controlekamer te komen. Om het krachtveld uit te schakelen, moet je op een knop drukken. Net op het moment dat je wilt drukken, stromen er 5 stormtroopers binnen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/controlekamer.jpg';
	document.getElementById('option2').innerHTML = "Druk toch op de knop";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option1').innerHTML = "Vecht eerst terug";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "inline";
	document.getElementById('option3').style.color = "white";
	document.getElementById('option3').innerHTML = "Probeer te vluchten";
	document.getElementById('option2').setAttribute("onClick", "javascript:Druk();");
	document.getElementById('option1').setAttribute("onClick", "javascript:VechtTerug();");
	document.getElementById('option3').setAttribute("onClick", "javascript:Vlucht();");
}

function VechtTerug(){
	document.getElementById('level_title').innerHTML = "Verkeerde keuze. Er waren teveel stormtroopers en bovendien kan je helemaal niet goed overweg met een lightsaber. Je wordt gedoodt. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/vechtterug.png';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('zwaard').style.display = "none";
}

function Vlucht(){
	document.getElementById('level_title').innerHTML = "Verkeerde keuze. Er waren teveel stormtroopers, waardoor je bij je vluchtpoging direct werd doodgeschoten. Je wordt gedoodt. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/vlucht.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('zwaard').style.display = "none";
}

function Druk(){
	document.getElementById('level_title').innerHTML = "Het lukt je net op tijd om op de knop te drukken. Op dat zelfde moment beginnen de stormtroopers op je te schieten met hun blasters. Je wordt geraakt in je been en schouder. Je enige kans om nog te overleven is om net te doen alsof je dood bent. Als de stormtoopers weg zijn, wordt je opgehaald door Luke en samen vlieg je naar een rebel-basis om je te laten verzorgen aan je verwondingen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/scarif.jpg';
	document.getElementById('option2').innerHTML = "none";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option1').innerHTML = "Vlieg naar een rebel-basis";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option1').setAttribute("onClick", "javascript:VliegWeg();");
}

function VliegWeg(){
	document.getElementById('level_title').innerHTML = "Nadat je bent verzorgd, komt Luke de kamer in gelopen. Om je te bedanken voor je hulp hebben de rebels een ceremonie voor je georganiseerd.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/basis.jpg';
	document.getElementById('option1').innerHTML = "Ga naar de ceremonie";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Verstop je";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Ceremonie();");
}

function Ceremonie(){
	document.getElementById('level_title').innerHTML = "Je hebt gewonnen! Omdat je tijdens het helpen van Luke zoveel moed hebt getoond, krijg je een medaille.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/ceremonie.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('zwaard').style.display = "none";
}

function Killed(){
	document.getElementById('level_title').innerHTML = "Verkeerde keuze. Er waren teveel stormtroopers en bovendien kan je helemaal niet goed overweg met een lightsaber. Je wordt gedoodt. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/killed.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById('zwaard').style.display = "none";
}

function Red(){
	document.getElementById('level_title').innerHTML = "Verkeerde keuze. De vijandige schepen begonnen op je te schieten toen je de gewonde rebel probeerde te redden. Helaas werd je hierbij geraakt door de rondvliegende lasers. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/red.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
}

function Neergeschoten(){
	document.getElementById('level_title').innerHTML = "Helaas was dit geen goede keuze. Je had geen rekening gehouden met meerdere AT-ST's die jouw makkelijk konden neerschieten. Game Over.";
	document.getElementById('level_title').style.color = "white";	
	document.getElementById("level_image").src = 'img/neergeschoten.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
}

var heeftWapen = false;
function Level5(){
	document.getElementById('level_title').innerHTML = "Je bent samen met Han Solo aangekomen op Endor. Nadat je bent gestuit op een grote groep stormtroopers vertelt hij dat hij wraak wil nemen, omdat de stormtroopers zijn vriend hebben vermoord. Hij vraagt je om hulp.";
	document.getElementById('level_title').style.color = "white";	
	document.getElementById("level_image").src = 'img/endor.jpg';
	document.getElementById('option1').innerHTML = "Weiger te schieten";
	document.getElementById('option2').innerHTML = "Schiet";
	document.getElementById('option3').innerHTML = "Vermoord Han Solo";
	document.getElementById('wapen').style.display = "block";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').style.display = "inline";
	document.getElementById('option2').setAttribute("onClick", "javascript:Schiet();");
	document.getElementById('option1').setAttribute("onClick", "javascript:Weiger();");
	document.getElementById('option3').setAttribute("onClick", "javascript:Vermoord();");
		
	document.getElementById('option2').onclick = function(){
		if(heeftWapen){
			Schiet();
		} else {
			alert("Pak het wapen!");
		}
		document.getElementById("wapen").onclick = function(){
			document.getElementById("wapen").style.display = "none";
			heeftWapen = true;
		}
}
}

function Weiger(){
	document.getElementById('level_title').innerHTML = "Helaas was dit geen goede keuze. Han Solo schoot wel waardoor de stormtroopers terug begonnen te schieten. Helaas werd je daarbij geraakt. Game Over.";
	document.getElementById('level_title').style.color = "white";	
	document.getElementById("level_image").src = 'img/schieten.jpg';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById("wapen").style.display = "none";
}

function Vermoord(){
	document.getElementById('level_title').innerHTML = "Helaas was dit geen goede keuze. De stormtroopers hoorde je schieten op Han Solo, waardoor ze ook op jou begonnen te schieten. Game Over.";
	document.getElementById('level_title').style.color = "white";	
	document.getElementById("level_image").src = 'img/battle.png';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById("wapen").style.display = "none";
}

function Schiet(){
	document.getElementById('level_title').innerHTML = "Het lukt je om een groot gedeelte van de stormtroopers te vermoorden, maar een klein groepje blijft leven. Het is tijd om te ontsnappen. Han Solo heeft twee Speeder Bikes klaar staan om te ontsnappen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/speederbikes.jpg';
	document.getElementById('option1').innerHTML = "Ontsnap via de bomen";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Ontsnap via de grot";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').innerHTML = "Ontsnap via het water";
	document.getElementById('option3').style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Boom();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Grot();");
	document.getElementById('option3').setAttribute("onClick", "javascript:Water();");
}

function Boom(){
	document.getElementById('level_title').innerHTML = "Helaas was dit geen goede keuze. Omdat je niet zo goed met een speeder bike om kon gaan, vlieg je keihard een boom in. Door de explosie en de klap kom je om het leven. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/explosie.png';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById("wapen").style.display = "none";
}

function Grot(){
	document.getElementById('level_title').innerHTML = "Helaas was dit geen goede keuze. Omdat je niet zo goed met een speeder bike om kon gaan, vlieg je keihard een boom in. Door de explosie en de klap kom je om het leven. Game Over.";
	document.getElementById('level_title').style.color = "white";	
	document.getElementById("level_image").src = 'img/explosie.png';
	document.getElementById('option1').innerHTML = "...";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "...";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').style.display = "none";
	document.getElementById("wapen").style.display = "none";
}

function Water(){
	document.getElementById('level_title').innerHTML = "Omdat er via het water veel ruimte is, lukt het je om te ontsnappen. Han Solo vertelt je dat hij je goed kan gebruiken voor meer van zulke missies. Ook heb je de mogelijkheid om een mee te doen aan een geheime missie om de Death Star te vernietigen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/water.jpg';
	document.getElementById('option1').innerHTML = "Doe mee met de missies van Han";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Ga naar de Death Star";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Missie();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Star();");
}

var heeftSuit = false;
function Star(){
	document.getElementById('level_title').innerHTML = "Je komt binnen via het landingsplatform van de Death Star. Met de kleren die je nu aan hebt maak je geen schijn van kans om hier levend weg te komen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/hangar.png';
	document.getElementById('option1').innerHTML = "Ga verder met deze kleren";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Val een stormtrooper aan";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById("suit").style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Kleren();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Suit();");

	document.getElementById('option2').onclick = function(){
		if(heeftSuit){
		Kleren();
	} else {
		alert("Trek het stormtrooper pak aan!");
	}
		document.getElementById("suit").onclick = function(){
		document.getElementById("suit").style.display = "none";
		heeftSuit = true;
	}
}
}

function Missie(){
	document.getElementById('level_title').innerHTML = "Voor de volgende missie ga je met Han Solo naar de planeet Bespin. De doel van de missie is het vermoorden van Darth Vader. Na het uitschakelen van de bewakers kom je bij de kamer van Darth Vader.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/bespin.jpg';
	document.getElementById('option1').innerHTML = "Ga naar binnen";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Binnen();");
}

var heeftBlaster = false;
function Binnen(){
	document.getElementById('level_title').innerHTML = "Voor je staat Darth Vader. Dit je kans om hem te vermoorden. Pak de DL-44 van Han om op Darth Vader te schieten.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/blaster1.jpg';
	document.getElementById('option1').innerHTML = "Schiet";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById("blaster").style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Schieten();");

	document.getElementById('option1').onclick = function(){
		if(heeftBlaster){
			Schieten();
		} else {
			alert("Pak de DL-44!");
		}
		document.getElementById("blaster").onclick = function(){
			document.getElementById("blaster").style.display = "none";
			heeftBlaster = true;
		}
}
}

function Schieten(){
	document.getElementById('level_title').innerHTML = "Helaas houdt Darth Vader de laser, die uit de DL-44 komt, tegen. Snel rennen jij en Han Solo de kamer uit. Om hier levend vandaan te komen heb je een plan nodig.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/vader.jpg';
	document.getElementById('option1').innerHTML = "Spring naar beneden";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Ren terug naar je schip";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').innerHTML = "Wacht in een veilige kamer";
	document.getElementById('option3').style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Spring();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Schip();");
	document.getElementById('option3').setAttribute("onClick", "javascript:Wacht();");
}

function Spring(){
	document.getElementById('level_title').innerHTML = "Je kan helaas niet vliegen, dus springen is zelfmoord.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/spring.jpg';
	document.getElementById('option1').innerHTML = "";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
}

function Schip(){
	document.getElementById('level_title').innerHTML = "Je schip werd opgewacht door een grote groep stormtroopers. Je kon jezelf hier niet tegen verdedigen, dus werd je doodgeschoten. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/troopers.jpg';
	document.getElementById('option1').innerHTML = "";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
}

function Wacht(){
	document.getElementById('level_title').innerHTML = "Als de kust veilig is komen jij en Han tevoorschijn. Helaas is het niet gelukt om Darth Vader te vermoorden, maar je bent wel heelhuids weggekomen. Je laatste kans om Darth Vader te vermoorden is door naar de Death Star te gaan.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/deathstar.jpg';
	document.getElementById('option1').innerHTML = "Ga naar de Death Star";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "none";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Star();");
	document.getElementById('option2').setAttribute("onClick", "javascript:();");
	document.getElementById('option3').setAttribute("onClick", "javascript:();");
}

var heeftSuit = false;
function Star(){
	document.getElementById('level_title').innerHTML = "Je komt binnen via het landingsplatform van de Death Star. Met de kleren die je nu aan hebt maak je geen schijn van kans om hier levend weg te komen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/hangar.png';
	document.getElementById('option1').innerHTML = "Ga verder met deze kleren";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "Val een stormtrooper aan";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "inline";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById("suit").style.display = "inline";
	document.getElementById('option1').setAttribute("onClick", "javascript:Kleren();");
	document.getElementById('option2').setAttribute("onClick", "javascript:Suit();");

	document.getElementById('option2').onclick = function(){
		if(heeftSuit){
		Suit();
	} else {
		alert("Trek het stormtrooper pak aan!");
	}
		document.getElementById("suit").onclick = function(){
		document.getElementById("suit").style.display = "none";
		heeftSuit = true;
	}
}
}

function Kleren(){
	document.getElementById('level_title').innerHTML = "Je werd gezien in je normale kleren en werd direct neergeschoten. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/hangar1.jpg';
	document.getElementById('option1').innerHTML = "";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById("suit").style.display = "none";
}

function Suit(){
	document.getElementById('level_title').innerHTML = "Nu je de stormtrooper kleren aan hebt val je minder op. Snel loop je naar de controlekamer waar je de knop kunt vinden waarmee je de hele Death Star kunt opblazen.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/controle.jpg';
	document.getElementById('option1').innerHTML = "Druk op de knop";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "inline";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById("suit").style.display = "none";
	document.getElementById('option1').setAttribute("onClick", "javascript:Destruction();");
}

function Destruction(){
	document.getElementById('level_title').innerHTML = "Zonder dat je wist wat er ging gebeuren heb je de hele Death Star op laten blazen. Ook jij bent hierdoor om het leven gekomen. Game Over.";
	document.getElementById('level_title').style.color = "white";
	document.getElementById("level_image").src = 'img/deadstar.jpg';
	document.getElementById('option1').innerHTML = "";
	document.getElementById('option1').style.color = "white";
	document.getElementById('option1').style.display = "none";
	document.getElementById('option2').innerHTML = "";
	document.getElementById('option2').style.color = "white";
	document.getElementById('option2').style.display = "none";
	document.getElementById('option3').innerHTML = "";
	document.getElementById('option3').style.display = "none";
	document.getElementById("suit").style.display = "none";
}



















































