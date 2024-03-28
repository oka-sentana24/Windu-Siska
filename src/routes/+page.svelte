<script>
  import { fade, fly } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import Saos from "saos";
  let isOpenContent = false;
  let isLoading = true;

  const toggleContent = () => {
    console.log("toggleContent");
    isOpenContent = !isOpenContent;
  };

  let weddingDate = new Date("2024-04-14").getTime(); // Tanggal pernikahan
  let now = new Date().getTime(); // Waktu saat ini
  let timeLeft = weddingDate - now; // Selisih waktu antara sekarang dan tanggal pernikahan

  let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const updateCountdown = () => {
    now = new Date().getTime();
    timeLeft = weddingDate - now;
    daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  };

  const interval = setInterval(updateCountdown, 1000);

  onMount(() => {
    updateCountdown(); // Update countdown saat komponen dimount
  });

  onDestroy(() => {
    clearInterval(interval); // Membersihkan interval saat komponen dihancurkan
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

{#if !isOpenContent}
  <section
    class="banner px-5 py-5 h-screen"
    style="background-image: linear-gradient(185deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.57) 100%), url(https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-1.jpg) !important; background-position: 40% 50%;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
}"
    transition:fly={{ y: -500, duration: 1000 }}
  >
    <div class="head relative top-0 h-[75vh]">
      <div class="text-center text-white">
        <h4 class="py-5">The Wedding Of</h4>
        <h1 class="text-4xl">Windu & Siska</h1>
      </div>
    </div>
    <div class="footer relative bottom-0 text-white">
      <div class="text-center">
        <p class="py-5">
          Mohon maaf bila ada kesalahan pada penulisan nama/gelar
        </p>
        <button
          class="bg-white text-black rounded-lg px-5 py-4"
          on:click={toggleContent}
        >
          Open Invitation
        </button>
      </div>
    </div>
  </section>
{:else}
  <section class="content">
    <div
      style="background-image: linear-gradient(180deg, #969696 0%, #353535 100%) !important;"
    >
      <div
        class="head-content"
        style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.54) 100%), url(https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-13.jpg) !important; background-position: 40% 50%; height: 50vh;
      background-size: cover;
      background-repeat: no-repeat;"
      >
        <div class=" relative h-[50vh] grid justify-center items-end pb-5">
          <div class="text-center text-white">
            <h4>The Wedding Of</h4>
            <h1>Windu & Siska</h1>
            <p>14.04.2024 | Gianyar</p>
          </div>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg bg-white">
        <div class="p-5">
          <img
            class="w-full"
            src="https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-14.jpg"
            alt="Sunset in the mountains"
          />

          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">We Found Love</div>
            <p class="text-gray-700 text-base">
              “Ya, pasangan suami-istri, semoga anda tetap disini dan tidak
              pernah terpisahkan. Semoga anda berdua mencapai hidup yang penuh
              kebahagiaan. Semoga anda, bermain dengan anak-anak lakimu dan
              cucu-cucu lakimu, tinggal di rumah ini dengan gembira”
            </p>

            <p>(Rgveda : X.85.42)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="my-8">
    <div
      class="relative bg-white border border-gray-200 rounded-lg shadow mx-5"
    >
      <div class=" text-center p-10">
        <Saos
          animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
        >
          <h1>Sang Mempelai</h1>
        </Saos>
      </div>
      <div class="my-5">
        <Saos
          animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
        >
          <div class="flex items-start justify-center py-5">
            <img
              class="rounded-xl w-[50%] h-full object-cover"
              src="https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-5.jpg"
              alt="Extra large avatar"
            />
          </div>
        </Saos>

        <div class=" text-center">
          <Saos
            animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
          >
            <h1>Kadek Windu Wijaya</h1>
          </Saos>
          <Saos
            animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
          >
            <p>Putra dari ke dua</p>
            <p>I Made Sudiana & Ni Wayan Marpini</p>
            <p>Br.Sema, Desa Bitera, Gianyar</p>
          </Saos>
        </div>
        <div class="py-5">
          <h1>&</h1>
        </div>
        <Saos
          animation={isLoading
            ? "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
            : ""}
        >
          <div class="flex items-start justify-center py-5">
            <img
              class="rounded-xl w-[50%] h-full object-cover"
              src="https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-6.jpg"
              alt="Extra large avatar"
            />
          </div>
        </Saos>

        <div class=" text-center">
          <Saos
            animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
          >
            <h1>Ni Kadek Siska</h1>
          </Saos>
          <Saos
            animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
          >
            <p>Putri dari ke dua</p>
            <p>Ni Made Wandira & Ni Made Budiasih</p>
            <p>Br.Kemenuh, Gianyar</p>
          </Saos>
        </div>
      </div>
    </div>
  </section>

  <section class="my-8 bg-slate-100">
    <div class="p-5 text-center">
      <Saos
        animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
      >
        <h1 class="p-10">Om Swastyastu</h1>
      </Saos>
      <Saos
        animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
      >
        <p>
          Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa kami bermaksud
          mengundang Bapak/Ibu/Saudara/i pada upacara Pawiwahan Putra dan Putri
          kami, yang diselenggarakan pada :
        </p>
      </Saos>

      <div class="py-5">
        <div
          style="background-image:linear-gradient(185deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.57) 100%), url(https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-1.jpg) !important; background-position: 40% 50%;
        background-repeat: no-repeat;
        object-fit: cover;
        background-size: cover;
        height:50vh;
        border-radius: 10px;
      }"
        >
          <div class="flex items-center justify-center h-[50vh] text-white">
            <div>
              <Saos
                animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
              >
                <img
                  src="https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/hi/2022/02/icon.png"
                  class="w-[4rem] h-[4rem] mx-auto"
                  alt=""
                />
                <span class="block text-center py-5">Pawiwahan</span>
                <hr />
                <div class="py-5">
                  <p class="text-center">Rabu, 17 Januari 2024</p>
                  <p class="text-center">12.00 Wita</p>
                </div>
              </Saos>
            </div>
          </div>
        </div>
      </div>

      <div class="py-5">
        <div
          style="background-image:linear-gradient(185deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.57) 100%), url(https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-1.jpg) !important; background-position: 40% 50%;
        background-repeat: no-repeat;
        object-fit: cover;
        background-size: cover;
        height:50vh;
        border-radius: 10px;
      }"
        >
          <div class="flex items-center justify-center h-[50vh] text-white">
            <div>
              <Saos
                animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
              >
                <img
                  src="https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/hi/2022/02/icon.png"
                  class="w-[4rem] h-[4rem] mx-auto"
                  alt=""
                />
                <h1 class="block text-center py-5">Resepsi Nikah</h1>
                <hr />

                <div class="py-5">
                  <p class="text-center">Minggu, 14 April 2024</p>
                  <p class="text-center">14.00 Wita</p>
                </div>
                <hr />
                <h1 class="block text-center py-3">Lokasi</h1>

                <p class="text-center py-2">Br. Sema, Desa Bitera, Gianyar</p>

                <button class=" bg-white text-black px-4 py-2 rounded-lg">
                  Denah lokasi
                </button>
              </Saos>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="roundedshadow-lg bg-white m-5 rounded-lg">
      <div class="p-5">
        <img
          class="w-full rounded-lg"
          src="https://undanganwebmedia.sgp1.digitaloceanspaces.com/withlove/in/2024/01/PHOTO-EDITING-14.jpg"
          alt="Sunset in the mountains"
        />

        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2">
            <h1 class="text-2xl">Menuju Hari Bahagia</h1>
          </div>
          <p class="text-gray-700 text-base">
            Waktu berganti begitu cepat, dalam penantian kami yang penuh doa,
            kami berharap kehadiran dan doa restu seluruh keluarga, sahabat dan
            saudara terkasih, untuk menjadi saksi ikrar janji suci kami di hari
            bahagia
          </p>

          <p>(Rgveda : X.85.42)</p>

          <div class="py-5">
            <div class="flex space-x-1 justify-center">
              <div>
                <h1>{daysLeft}</h1>
                <span class="text-sm text-gray-600"> Days</span>
              </div>
              <div>
                <h1>:</h1>
              </div>
              <div>
                <h1>{hoursLeft}</h1>
                <span class="text-sm text-gray-600">Hours</span>
              </div>
              <div>
                <h1>:</h1>
              </div>
              <div>
                <h1>{minutesLeft}</h1>
                <span class="text-sm text-gray-600">Minutes</span>
              </div>
              <div>
                <h1>:</h1>
              </div>
              <div>
                <h1>{secondsLeft}</h1>
                <span class="text-sm text-gray-600">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="p-5 text-center">
      <Saos
        animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
      >
        <h1 class="p-10">Rsvp</h1>
      </Saos>
      <Saos
        animation={"scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
      >
        <p>
          Mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i dengan mengisi form
          berikut
        </p>
      </Saos>
    </div>
  </section>
{/if}

<style>
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  /* ----------------------------------------------
 * Animations below by Animista on 2020-7-11
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes -global-rotate-in-center {
    0% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(0);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-fwd-tr {
    0% {
      transform: translateZ(-1200px) translateY(-700px) translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0) translateY(0) translateX(0);
      opacity: 1;
    }
  }

  @keyframes -global-slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }

  @keyframes -global-roll-in-left {
    0% {
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-roll-in-blurred-left {
    0% {
      transform: translateX(-1000px) rotate(-720deg);
      filter: blur(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(0deg);
      filter: blur(0);
      opacity: 1;
    }
  }

  @keyframes -global-tilt-in-fwd-tr {
    0% {
      transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
        skew(-35deg, 10deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }

  @keyframes -global-swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  @keyframes -global-puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* EXITS */
  @keyframes -global-scale-out-center {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 1;
    }
  }

  @keyframes -global-rotate-out-center {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 0;
    }
  }

  @keyframes -global-rotate-out-2-cw {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    100% {
      transform: rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes -global-swirl-out-bck {
    0% {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
  }

  @keyframes -global-flip-out-hor-top {
    0% {
      transform: rotateX(0);
      opacity: 1;
    }
    100% {
      transform: rotateX(70deg);
      opacity: 0;
    }
  }

  @keyframes -global-slide-out-top {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-1000px);
      opacity: 0;
    }
  }

  @keyframes -global-slide-out-fwd-center {
    0% {
      transform: translateZ(1);
      opacity: 1;
    }
    100% {
      transform: translateZ(600px);
      opacity: 0;
    }
  }

  @keyframes -global-slide-out-elliptic-top-bck {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
    100% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 1;
    }
  }
</style>
