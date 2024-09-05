<script>
    import { onMount } from "svelte";
    
    let header;
    let nav;
    let phoneNav = document.getElementById('phone-nav');

    onMount(() => {
        if (window.innerWidth <= 400) {
            nav.classList.add('hidden');
        }

        const handleScroll = () => {
            if (window.scrollY > 20) {
                header.classList.remove('bg-opacity-0');
                header.classList.add('bg-opacity-100');
            } else {
                header.classList.remove('bg-opacity-100');
                header.classList.add('bg-opacity-0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>


<header bind:this={header} class="bg-black bg-opacity-0 flex justify-between items-center py-3 px-4 lg:py-4 lg:px-10 fixed w-full top-0 left-z z-10">
    <h1 class="font-bold uppercase text-white text-3xl">Geiz</h1>
    <nav bind:this={nav} class="flex space-x-2 text-white">
        <a href="#home" class="btn btn-ghost">Home</a>
        <a href="#about" class="btn btn-ghost">Over Ons</a>
        <a href="#contact" class="btn btn-ghost">Contact</a>
    </nav>
    <nav class="phone-nav">
        <button class="btn btn-square btn-ghost">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-5 w-5 stroke-current">
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </nav>
</header>

<section class="hero min-h-screen" style="background-image: url(hero-wallpaper-1.jpg)">
    <div id="home" style="position: absolute; top: 0;"></div>    
    <div class="hero-content text-center flex flex-col">
        <h1 class="font-bold text-8xl text-white">Geiz</h1>
        <h3 class=" font-medium italic text-5xl text-white">Jouw kapsel, onze kunst</h3>
    </div>
</section>

<section class="py-32 bg-primary">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0 space-y-12 lg:space-y-22 lg:space-x-16">
        <div class="flex-1 lg:text-right text-center">
            <h1 class="text-5xl font-bold mb-6">Jaren ervaring</h1>
            <p class="mb-8">
                Hoewel Geiz pas in 2023 is opgericht, brengen onze kappers waardevolle ervaring met zich mee die ze sinds 2017 hebben opgedaan in het vak. 
                Sinds de start van hun carrière hebben zij hun vaardigheden verfijnd en zich continu bijgeschoold in de nieuwste technieken en trends in haarverzorging. 
                Bij Geiz combineren we deze ervaring met de nieuwste trends om een uitstekende service te bieden.
                <br>
                <br>
                Bij Geiz staat kwaliteit voorop. Onze ervaren kappers gebruiken uitsluitend hoogwaardige producten en technieken 
                om ervoor te zorgen dat je met een tevreden gevoel de deur uitgaat. 
                Wij hebben een passie voor zowel klassieke als moderne kapsels en zorgen ervoor dat elk kapsel met precisie en vakmanschap wordt uitgevoerd.
                Bekijk hier onze <a href="#about" class="link link-secondary">openingstijden</a>.
            </p>
        </div>
        <div class="flex-1">
            <img src="barbershop1.jpg" class="w-full h-full rounded-lg" alt="Barbershop interior">
        </div>
    </div>

    <div class="max-w-6xl mx-auto mt-24 flex flex-col lg:flex-row-reverse items-center justify-between px-4 lg:px-0 space-y-12 lg:space-y-22 lg:space-x-16">
        <div class="flex-1 lg:text-left text-center">
            <h1 class="text-5xl font-bold mb-6">Ervaring die telt</h1>
            <p class="mb-8">
                Onze kappers hebben sinds 2017 hun expertise opgebouwd in het creëren van diverse kapsels en stijlen. 
                Sinds de oprichting van Geiz in 2023 hebben wij deze ervaring verder ingezet om een hoog niveau van service te bieden. 
                Of je nu een klassieke snit of een trendy look zoekt, wij hebben de ervaring en kennis om aan jouw wensen te voldoen.
                <br>
                <br>
                Bij Geiz hechten wij veel waarde aan een persoonlijke benadering. Wij nemen de tijd om jouw wensen en 
                behoeften te begrijpen en bieden professioneel advies om het beste resultaat te bereiken. 
                Onze focus ligt op klanttevredenheid, en wij streven ernaar om jou een comfortabele en op maat gemaakte ervaring te 
            </p>
            <a href="#contact" class="btn btn-outline btn-primary">Afspraak maken</a>
        </div>
        <div class="flex-1">
            <img src="barbershop2.jpg" class="w-full lg:w-5/6 h-auto rounded-lg" alt="Barbershop interior">
        </div>
    </div>
</section>


<section id="about" class="py-32 bg-secundary ">
    <div class="max-w-6xl mx-auto flex flex-col px-4 lg:px-0 space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class=" text-5xl font-bold items-center justify-center text-center align-middle">Sinds 2016</h1>
        <div class="flex flex-col lg:flex-row space-y-6">
            <div class="flex-1 text-left pr-20">
                <p>    
                    Hoewel Geiz pas in 2023 officieel werd opgericht, brengen wij bij Geiz jarenlange ervaring en vakmanschap met ons mee. 
                    Sinds 2016 zijn we actief als kapper en hebben we onze vaardigheden voortdurend verfijnd en uitgebreid. 
                    Deze jarenlange ervaring in de branche stelt ons in staat om een uitzonderlijke kwaliteit van haarverzorging te bieden.
                    <br>
                    <br>
                    Met de oprichting van Geiz in 2023 hebben wij onze passie en expertise in een eigen barbershop gebundeld. 
                    Ondanks dat we een relatief nieuwe speler zijn op de markt, zetten wij onze uitgebreide ervaring en kennis in om uitstekende service te leveren. 
                    Onze klantenkring groeit snel en we zijn trots op de positieve feedback die we tot nu toe hebben ontvangen. 
                    Bij Geiz combineren we jarenlange ervaring met een frisse benadering om jouw kapsel precies goed te krijgen.
                </p>
            </div>    
            <ul class="timeline timeline-vertical flex-1">
                <li >
                <div class="timeline-start timeline-box shadow-xl"><span class="font-bold">2016:</span> Begonnen met knippen als hobby</div>
                <hr />
                </li>
                <li>
                <hr />
                <div class="timeline-end timeline-box shadow-xl"><span class="font-bold">2017:</span>  Eerste baan als kapper</div>
                <hr />
                </li>
                <li>
                <hr />
                <div class="timeline-start timeline-box shadow-xl"><span class="font-bold">2023:</span>  Barbershop Geiz geopend</div>
                </li>
            </ul>
        </div>
        <div class="max-w-6xl mx-auto flex flex-col lg:flex-row justify-start lg:space-x-4">
            <div class="flex pt-6 lg:pt-0">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5569.762524335026!2d5.899942782876557!3d51.983616522609175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a5b9ff24740b%3A0xd755c8f57a1f7188!2sStation%20Arnhem%20Centraal!5e0!3m2!1snl!2snl!4v1725381631850!5m2!1snl!2snl"
                    width="550" 
                    height="450" 
                    class="rounded-lg w-full lg:w-[550px]" 
                    loading="lazy" 
                    title="map">
                </iframe>
            </div>
            <div class="my-auto px-6 pt-6 lg:pt-0">
                <h3 class="text-2xl tracking-wider uppercase py-4 text-left font-semibold">Openingstijden</h3>
                <tr>
                    <th class="text-left py-2 font-normal">Dinsdag</th>
                    <th class="pr-4">10:00</th>
                    <th>18:00</th>
                </tr>
                <tr>
                    <th class="text-left py-2 font-normal">Woensdag</th>
                    <th class="pr-4">10:00</th>
                    <th>18:00</th>
                </tr>
                <tr>
                    <th class="text-left py-2 pr-6 font-normal">Donderdag</th>
                    <th class="pr-4">10:00</th>
                    <th>18:00</th>
                </tr>
                <tr>
                    <th class="text-left py-2 font-normal">Vrijdag</th>
                    <th class="pr-4">10:00</th>
                    <th>20:00</th>
                </tr>
                <tr>
                    <th class="text-left py-2 font-normal">Zaterdag</th>
                    <th class="pr-4">10:00</th>
                    <th>18:00</th>
                </tr>
                
                <p class="py-10">
                    Station Arnhem Centraal<br> Stationsplein 166, 6811 KJ Arnhem<br> 06 31834933<br> info@geiz.nl
                </p>
            </div>
        </div>
 </section>

<section id="" class="py-32 bg-accent text-accent-content">
    <div class="max-w-6xl mx-auto flex flex-col items-center justify-center text-center align-middle space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class="text-5xl font-bold ">Onze tevreden klanten</h1>
        <div class="flex flex-col lg:flex-row lg:space-x-12 indicator space-y-6 lg:space-y-0">
            <div class="card bg-base-100 h-64 lg:h-96 w-64 lg:w-96 shadow-xl flex-shrink-0">
                <span class="indicator-item badge badge-accent">high fade</span>
                <img src="1.jpg" class="h-full w-full object-cover rounded-lg" alt="">
            </div>
            <div class="card bg-base-100 h-64 lg:h-96 w-64 lg:w-96 shadow-xl flex-shrink-0">
                <span class="indicator-item badge badge-primary">mid fade</span>
                <img src="2.webp" class="h-full w-full object-cover rounded-lg" alt="">
            </div>
            <div class="card bg-base-100 h-64 lg:h-96 w-64 lg:w-96 shadow-xl flex-shrink-0">
                <img src="3.jpg" class="h-full w-full object-cover rounded-lg" alt="">
            </div>
        </div>
    </div>
</section>

<section id="contact" class="py-32 bg-primary">
    <div class="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12 lg:space-y-24 lg:space-x-16">
        <div class="w-full">
            <h1 class="text-5xl font-bold">Maak een afspraak</h1>
            <h2 class="text-l py-4">Vul een datum in en bekijk de beschikbare tijden.</h2>
        </div>
        <div class="flex flex-col lg:flex-row mx-auto items-center lg:items-start">
            <div class="w-72 px-4 lg:px-0 flex flex-col items-start space-y-4">
                <label class="input input-bordered flex items-center gap-2 w-full">
                    <span class="text-secondary-content">Naam:</span>
                    <input type="text" class="grow" placeholder="" />
                </label>
                <label class="input input-bordered flex items-center gap-2 w-full">
                    <span class="text-secondary-content">Tel:</span>
                    <input type="text" class="grow" placeholder="" />
                </label>
                <label class="input  input-bordered flex items-center gap-2 w-full">
                    <span class="text-secondary-content">Email:</span>
                    <input type="email" class="grow" placeholder="" />
                </label>
                <label class="input input-bordered flex items-center gap-2 w-full">
                    <input type="date" class="grow" placeholder="Datum" />
                </label>
                <button class="btn btn-primary">Maak afspraak</button>
            </div>
            <div class="grid grid-cols-4 p-10 lg:pt-0 space-y-2 space-x-2 ">
                <input type="radio" name="time-buttons" class="btn join-item ml-2 mt-2" aria-label="10:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="10:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="11:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="11:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="12:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="12:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="13:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="13:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="14:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="14:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="15:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="15:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="16:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="16:30"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="17:00"  />
                <input type="radio" name="time-buttons" class="btn join-item" aria-label="17:30"  />
            </div>
        </div>
    </div>
</section>

<footer class="py-10 lg:py-16 text-gray-content bg-footer text-secondary-content">
    <div class="max-w-6xl flex flex-col lg:flex-row mx-auto px-2">
        <h2 class="mt-4">© 2024 Geiz. All Rights Reserved.</h2>
        <div class="lg:ml-auto flex flex-col mt-2 lg:mt-0">
            <h3 class="lg:ml-auto">Socials</h3>
            <div class="flex flex-row space-x-2">
                <a target="_blank" href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" style="fill:#949494;">
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                </svg></a>
                <a target="_blank" href="https://www.whatsapp.com/"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 24 24" style="fill:#949494;">
                    <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
                </svg></a>
                <a target="_blank" href="https://x.com/"><svg xmlns="http://www.w3.org/2000/svg" class="" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" style="fill:#949494;">
                    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg></a>
            </div>
        </div>
    </div>
</footer>
