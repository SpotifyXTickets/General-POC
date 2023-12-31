import "../app/globals.scss";
import "../styles/pages/_select-playlists.scss";

import Link from "next/link";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PlaylistSection from "@/components/PlaylistSection";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";

export default function SelectPlaylists() {
  return (
    <section>
      <NavBar />
      <main className="select-playlists">
        <h2 className="select-playlists__header">Select Playlists</h2>
        <p className="select-playlists__info">
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        <SearchBar />
        <PlaylistSection />
      </main>
      <section className="select-playlists__buttons">
        <Link className="select-playlists__link" href="/home-page">
          <Button
            text="text-[#6e3aff]"
            background="bg-[#fbf9f9]"
            border="border"
            borderColor="border-[#6e3aff]"
          >
            Skip This Step
          </Button>
        </Link>
        <Link className="select-playlists__link" href="/home-page">
          <Button text="text-[#fbf9f9]" background="bg-[#6e3aff]">
            Get Started
          </Button>
        </Link>
      </section>
      <Footer />
    </section>
  );
}
