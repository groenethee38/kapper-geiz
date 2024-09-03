<script>
    import { onMount } from "svelte";
    
    let header;
    let nav;

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


<header bind:this={header} class="bg-black bg-opacity-0 rgba flex justify-between items-center py-4 px-10 fixed w-full top-0 left-z z-10">
    <h1 class="font-bold uppercase text-white text-3xl">Geiz</h1>
    <nav bind:this={nav} class="flex space-x-2 text-white">
        <a href="#home" class="btn btn-ghost">Home</a>
        <a href="#about" class="btn btn-ghost">Over Ons</a>
        <a href="#contact" class="btn btn-ghost">Contact</a>
    </nav>
</header>

<section class="hero min-h-screen" style="background-image: url(hero-wallpaper-1.jpg)">
    <div id="home" style="position: absolute; top: 0;"></div>    
    <div class="hero-content text-center flex flex-col">
        <h1 class="font-bold text-8xl text-white">Geiz</h1>
        <h3 class=" font-medium italic text-5xl text-white">Jouw kapsel, onze kunst</h3>
    </div>
</section>

<section class="py-32 bg-primary text-primary-content ">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0 space-y-12 lg:space-y-22 lg:space-x-16">
        <div class="flex-1 lg:text-right text-center">
            <h1 class="text-5xl font-bold mb-6">Jaren ervaring</h1>
            <p class="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint <a href="#contact" class="link link-secondary">Openingstijden</a> occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                
            </p>
        </div>
        <div class="flex-1">
            <img src="barbershop1.jpg" class="w-full h-full rounded-lg" alt="Barbershop interior">
        </div>
    </div>

    <div class="max-w-6xl mx-auto mt-24 flex flex-col lg:flex-row-reverse items-center justify-between px-4 lg:px-0 space-y-12 lg:space-y-22 lg:space-x-16">
        <div class="flex-1 lg:text-left text-center">
            <h1 class="text-5xl font-bold mb-6">Ervaring die telt</h1>
            <p class="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                
            </p>
            <a href="#contact" class="btn btn-outline btn-primary">Afspraak maken</a>
        </div>
        <div class="flex-1">
            <img src="barbershop2.jpg" class="w-full lg:w-5/6 h-auto rounded-lg" alt="Barbershop interior">
        </div>
    </div>
</section>


<section id="about" class="py-32 bg-secondary text-primary-content">
    <div class="max-w-6xl mx-auto flex flex-col px-4 lg:px-0 space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class=" text-5xl font-bold items-center justify-center text-center align-middle">Sinds 2016</h1>
        <div class="flex flex-col lg:flex-row space-y-6">
            <div class="flex-1 text-primary-content text-left pr-20">
                <p>    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>    
            <ul class="timeline timeline-vertical text-primary-content flex-1">
                <li>
                <div class="timeline-start timeline-box">2016: Begonnen met knippen als hobby</div>
                <hr />
                </li>
                <li>
                <hr />
                <div class="timeline-end timeline-box">2017: Eerste baan als kapper</div>
                <hr />
                </li>
                <li>
                <hr />
                <div class="timeline-start timeline-box">2023: Barbershop Geiz geopend</div>
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
                    Station Arnhem Centraal<br>
                    Stationsplein 166, 6811 KJ Arnhem<br>
                    06 31834933<br>
                    info@geiz.nl
                </p>
            </div>
        </div>
 </section>

<section id="" class="py-32 bg-accent text-accent-content">
    <div class="max-w-6xl mx-auto flex flex-col items-center justify-center text-center align-middle space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class="text-5xl font-bold">Onze tevreden klanten</h1>

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

<section id="contact" class="py-32 text-primary-content bg-primary">
    <div class="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12 lg:space-y-24 lg:space-x-16">
        <div class="w-full">
            <h1 class="text-5xl font-bold">Maak een afspraak</h1>
            <h2 class="text-l py-4">Vul een datum in en bekijk de beschikbare tijden.</h2>
        </div>
        <div class="flex flex-col lg:flex-row mx-auto items-center lg:items-start">
            <div class="w-72 px-4 lg:px-0 flex flex-col items-start space-y-4">
                <label class="input input-bordered flex items-center gap-2 w-full">
                    Naam:
                    <input type="text" class="grow" placeholder="" />
                </label>
                <label class="input input-bordered flex items-center gap-2 w-full">
                    Tel:
                    <input type="text" class="grow" placeholder="" />
                </label>
                <label class="input  input-bordered flex items-center gap-2 w-full">
                    Email:
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

<footer class="py-20 text-gray-content bg-secondary text-secondary-content">
    <div class="max-w-6xl flex mx-auto">
        <h2 class="">GEIZ<br>© 2024 Geiz. All Rights Reserved.</h2>
        <div class="ml-auto flex flex-col">
            <h3 class="">Socials</h3>
        </div>
    </div>
</footer>