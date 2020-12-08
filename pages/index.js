import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Mail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main + " m-auto max-w-5xl px-10 mb-40 pt-16"}>
        
        <div className="m-auto w-40">
          <Image src="/mailman.png" width="540" height="540"></Image>
        </div>

        <h1 className="text-primary text-6xl font-bold text-center my-8">Project Mail</h1>
        <h3 className="text-gray-700 text-lg font-medium text-center">The Epic Stealth Puzzle Game with a Mailman</h3>
        <p className="text-gray-500 text-sm font-regular text-center mt-1">Now with free shipping and handling!</p>
        
        <div className="w-full mt-16 relative">
          <Image className="rounded-xl" src="/ss1.png" width="2560" height="1439"></Image>
        </div>
        
        <h1 className="text-gray-800 text-4xl font-bold text-left mb-4 mt-16 md:text-center">
          Meet <span className="text-primary">Stanley the Mailman</span>
        </h1>

        <p className="text-gray-800 text-lg font-regular text-left max-w-2xl m-auto">
        Stanley the Mailman is a simple family man who does his job well. Unfortunately, his jealous neighbor across the street, Mr. Jacobs, devises a plot to upend Stanley’s life and condemn him to a nightmare version of reality which Mr. Jacobs created himself. Stanley must solve puzzles, defeat enemies, and escape from the terror of this alternate reality.
        </p>

        <div className="flex flex-col md:flex-row items-center my-32 md:my-24">
          <div className="flex-1">
            <Image className="rounded-xl" src="/ss4.png" width="2560" height="1439"></Image>
          </div>

          <div className="w-16 h-6"></div>
          
          <div className="flex-1 w-full">
            <h3 className="text-gray-800 text-3xl font-bold text-left my-0 md:my-2">
              Determined. Resourceful.
            </h3>

            <p className="text-gray-800 text-lg font-regular text-left max-w-2xl m-auto">
              Interact with ladders, tunnels, and more to get to the end of each nefarious puzzle without getting caught by Mr. Jacob's sentries. Nothing stands in Stanley's way.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center my-32 md:my-24">
          <div className="flex-1">
            <Image className="rounded-xl" src="/ss2.png" width="2560" height="1439"></Image>
          </div>

          <div className="w-16 h-6"></div>
          
          <div className="flex-1 w-full">
            <h3 className="text-gray-800 text-3xl font-bold text-left my-0 md:my-2">
              Solve puzzles
            </h3>

            <p className="text-gray-800 text-lg font-regular text-left max-w-2xl m-auto">
              Mr. Jacobs is a wicked man. To solve his puzzles, you'll have to pay attention and use anything you can.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center my-32 md:my-24">
          <div className="flex-1">
            <Image className="rounded-xl" src="/ss3.png" width="2560" height="1439"></Image>
          </div>

          <div className="w-16 h-6"></div>
          
          <div className="flex-1 w-full">
          <h3 className="text-gray-800 text-3xl font-bold text-left my-0 md:my-2">
              Escape
            </h3>

            <p className="text-gray-800 text-lg font-regular text-left max-w-2xl m-auto">
              You have one goal: get to the end of Mr. Jacob's nightmarish reality so you can get back to your family and your job as a mailman. Can you do it?
            </p>
          </div>
        </div>
        


      </main>

      <footer className={styles.footer}>
        <div className="h-full m-auto px-10 max-w-5xl flex flex-col items-center text-gray-500 text-base font-xs text-center">
          <p className="py-6">© 2020 Rocket Mail Games</p>
          <p className="py-6">By Payman Ahmadpour, Steven Ramirez, Jeremy Colfer, Miles Vinson</p>
        </div>
      </footer>
    </div>
  )
}
