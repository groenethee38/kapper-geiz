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
        <h2 class="">GEIZ<br>© 2024 Geiz. All Rights Reserved.</h2>
        <div class="lg:ml-auto flex flex-col">
            <h3 class="">Socials</h3>
        </div>
    </div>
</footer>