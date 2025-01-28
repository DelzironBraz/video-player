import {
  Equalizer,
  FilmSlate,
  Fire,
  GameController,
  NewspaperClipping,
  Record,
  Storefront,
} from "@phosphor-icons/react";
import { MenuProps } from "antd";
import Link from "next/link";

export const categories: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="#">Em Alta</Link>,
    icon: <Fire size={32} />,
  },
  {
    key: "2",
    label: <Link href="#">Shopping</Link>,
    icon: <Storefront size={32} />,
  },
  {
    key: "3",
    label: <Link href="#">Música</Link>,
    icon: <Equalizer size={32} />,
  },
  {
    key: "4",
    label: <Link href="#">Filmes</Link>,
    icon: <FilmSlate size={32} />,
  },
  {
    key: "5",
    label: <Link href="#">Ao vivo</Link>,
    icon: <Record size={32} />,
  },
  {
    key: "6",
    label: <Link href="#">Jogos</Link>,
    icon: <GameController size={32} />,
  },
  {
    key: "7",
    label: <Link href="#">Notícias</Link>,
    icon: <NewspaperClipping size={32} />,
  },
];

export const topics: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="#">Moda</Link>,
  },
  {
    key: "2",
    label: <Link href="#">Tecnologia</Link>,
  },
  {
    key: "3",
    label: <Link href="#">Educação</Link>,
  },
  {
    key: "4",
    label: <Link href="#">Esportes</Link>,
  },
  {
    key: "5",
    label: <Link href="#">Saúde e Bem-Estar</Link>,
  },
  {
    key: "6",
    label: <Link href="#">Viagens</Link>,
  },
  {
    key: "7",
    label: <Link href="#">Culinária</Link>,
  },
  {
    key: "8",
    label: <Link href="#">Ciência</Link>,
  },
  {
    key: "9",
    label: <Link href="#">História</Link>,
  },
  {
    key: "10",
    label: <Link href="#">Fotografia</Link>,
  },
];

export const otherPages: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="#">Início</Link>,
  },
  {
    key: "2",
    label: <Link href="#">Biblioteca</Link>,
  },
  {
    key: "3",
    label: <Link href="#">Assistir Mais Tarde</Link>,
  },
  {
    key: "4",
    label: <Link href="#">Histórico</Link>,
  },
  {
    key: "5",
    label: <Link href="#">Favoritos</Link>,
  },
  {
    key: "6",
    label: <Link href="#">Configurações</Link>,
  },
  {
    key: "7",
    label: <Link href="#">Ajuda</Link>,
  },
];
