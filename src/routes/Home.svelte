<script>
    import { onMount } from "svelte";
    
    let header;

    onMount(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                header.classList.remove('bg-opacity-0');
                header.classList.add('bg-opacity-1');
            } else {
                header.classList.remove('bg-opacity-1');
                header.classList.add('bg-opacity-0');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<header bind:this={header} class="bg bg-black bg-opacity-0 rgba flex justify-between items-center py-4 px-10 fixed w-full top-0 left-z z-10">
    <h1 class="font-bold uppercase text-white text-3xl">Geiz</h1>
    <nav class="flex space-x-2 text-white">
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

<section class="py-32  bg-neutral-900">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-22 lg:space-x-16">
        <div class="flex-1 lg:text-right text-center">
            <h1 class="text-5xl font-bold mb-6 text-white">Jaren ervaring</h1>
            <p class="text-lg text-gray-300 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="flex-1">
            <img src="barbershop1.jpg" class="w-full h-full rounded-lg" alt="Barbershop interior">
        </div>
    </div>

    <div class="max-w-6xl mx-auto mt-24 flex flex-col lg:flex-row-reverse items-center justify-between space-y-12 lg:space-y-22 lg:space-x-16">
        <div class="flex-1 lg:text-left text-center">
            <h1 class="text-5xl font-bold mb-6 text-white">Ervaring die telt</h1>
            <p class="text-lg text-gray-300 mb-8">
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


<section id="about" class="py-32 bg-neutral-800">
    <div class="max-w-6xl mx-auto flex flex-col items-center justify-center text-center align-middle space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class="text-white text-5xl font-bold">Sinds 2016</h1>
        <div class="flex flex-row">
            <div class="flex-1 text-white text-left pr-20">
                <p>    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>    
            <ul class="timeline timeline-vertical text-white flex-1">
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
</section>

<section id="" class="py-32  bg-neutral-700">
    <div class="max-w-6xl mx-auto flex flex-col items-center justify-center text-center align-middle space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class="text-white text-5xl font-bold">Onze tevreden klanten</h1>
        
        <div class="flex flex-col lg:flex-row space-x-12 indicator">
            <div class="card bg-base-100 h-96 w-96 shadow-xl">
                <span class="indicator-item badge badge-secundary">high fade</span>
                <img src="1.jpg" class="h-full w-full object-fill rounded-lg" alt="">
            </div>
            <div class="card bg-base-100 h-96 w-96 shadow-xl">
                <span class="indicator-item badge badge-primary">mid fade</span>
                <img src="2.webp" class="h-full w-full object-fill rounded-lg" alt="">
            </div>
            <div class="card bg-base-100 h-96 w-96 shadow-xl">
                <img src="3.jpg" class="h-full w-full object-fill rounded-lg" alt="">
            </div>
        </div>
    </div>
</section>

<section id="contact" class="py-32 bg-neutral-800">
    <div class="max-w-6xl mx-auto flex flex-col items-center justify-center text-center align-middle space-y-12 lg:space-y-24 lg:space-x-16">
        <h1 class="text-white text-5xl font-bold">Maak een afspraak</h1>
        <div class="align-left">
            
        </div>
    </div>
</section>

<footer class="footer">

</footer>

