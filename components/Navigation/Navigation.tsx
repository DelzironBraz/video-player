"use client";

import { Header } from "@/templates/header.template";
import { SimpleLink } from "@/templates/link.template";
import { MobileDropdown } from "@/templates/mobile-dropdown.template";
import { categories, otherPages, topics } from "@/utils/navigation.helper";
import {
  CaretDown,
  List,
  MagnifyingGlass,
  User,
  X,
} from "@phosphor-icons/react";
import { Button, Dropdown, Tooltip } from "antd";
import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header
      className={`transition-all duration-300 ${
        isScrolled ? "bg-[#131313]" : "bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="max-w-[1366px] hidden lg:flex justify-between items-center gap-4 w-full mx-auto">
        <SimpleLink href="/">
          <h1 className="font-bold text-2xl text-center">Logo</h1>
        </SimpleLink>

        <nav className="w-full flex justify-center items-center">
          <ul className="flex justify-center items-center gap-5">
            <li>
              <Dropdown menu={{ items: categories }}>
                <SimpleLink
                  href="/categories"
                  className="flex justify-start items-center gap-4"
                >
                  Categorias
                  <CaretDown size={20} />
                </SimpleLink>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: topics }}>
                <SimpleLink
                  href="/topics"
                  className="flex justify-start items-center gap-4"
                >
                  Assuntos
                  <CaretDown size={20} />
                </SimpleLink>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: otherPages }}>
                <SimpleLink
                  href="/other-pages"
                  className="flex justify-start items-center gap-4"
                >
                  Outras páginas
                  <CaretDown size={20} />
                </SimpleLink>
              </Dropdown>
            </li>
            <li>
              <SimpleLink href="/my-list">Minha Lista</SimpleLink>
            </li>
            <li>
              <SimpleLink href="/lives">Lives</SimpleLink>
            </li>
            <li>
              <SimpleLink href="/forum">Forúm</SimpleLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Tooltip title="Pesquisar">
            <Button
              type="text"
              shape="circle"
              icon={<MagnifyingGlass size={20} className="!text-white" />}
            />
          </Tooltip>
          <Tooltip title="Perfil">
            <Button
              type="text"
              shape="circle"
              className="bg-[#757575] hover:!bg-[#757575]"
              icon={
                <User
                  size={20}
                  weight="fill"
                  className="!text-black hover:!text-white"
                />
              }
            />
          </Tooltip>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden justify-between items-center gap-4 w-full">
        <Button
          type="text"
          icon={
            isMenuVisible ? (
              <X size={32} weight="thin" className="!text-white" />
            ) : (
              <List size={32} weight="thin" className="!text-white" />
            )
          }
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />

        <SimpleLink href="/" className="flex items-center gap-4">
          <h1 className="font-bold text-2xl">Logo</h1>
        </SimpleLink>

        <div className="flex items-center gap-4">
          <Tooltip title="Pesquisar">
            <Button
              type="text"
              shape="circle"
              icon={<MagnifyingGlass size={20} className="!text-white" />}
            />
          </Tooltip>
          <Tooltip title="Perfil">
            <Button
              type="text"
              shape="circle"
              className="bg-[#757575]"
              icon={<User size={20} weight="fill" className="!text-black" />}
            />
          </Tooltip>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuVisible ? "block" : "hidden"
        } w-full h-screen bg-[#0a0a0a] text-white absolute top-[60px] left-0 z-40`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setOpenDropdown("categories")}
            >
              Categorias <CaretDown size={20} />
            </button>
            {openDropdown === "categories" && (
              <MobileDropdown className="flex flex-col gap-2 pl-4 pt-2">
                {(categories || []).map(
                  (category) =>
                    category &&
                    "label" in category && (
                      <li key={category.key}>
                        <SimpleLink href="#">{category.label}</SimpleLink>
                      </li>
                    )
                )}
              </MobileDropdown>
            )}
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setOpenDropdown("topics")}
            >
              Assuntos <CaretDown size={20} />
            </button>
            {openDropdown === "topics" && (
              <MobileDropdown>
                {(topics || []).map(
                  (topic) =>
                    topic &&
                    "label" in topic && (
                      <li key={topic.key}>
                        <SimpleLink href="#">{topic.label}</SimpleLink>
                      </li>
                    )
                )}
              </MobileDropdown>
            )}
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full"
              onClick={() => setOpenDropdown("otherPages")}
            >
              Outras Páginas <CaretDown size={20} />
            </button>
            {openDropdown === "otherPages" && (
              <MobileDropdown>
                {openDropdown === "otherPages" && (
                  <ul className="flex flex-col gap-2 pl-4 pt-2">
                    {(otherPages || []).map(
                      (page) =>
                        page &&
                        "label" in page && (
                          <li key={page.key}>
                            <SimpleLink href="#">{page.label}</SimpleLink>
                          </li>
                        )
                    )}
                  </ul>
                )}
              </MobileDropdown>
            )}
          </li>
          <li>
            <SimpleLink href="/my-list">Minha Lista</SimpleLink>
          </li>
          <li>
            <SimpleLink href="/lives">Lives</SimpleLink>
          </li>
          <li>
            <SimpleLink href="/forum">Fórum</SimpleLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Navigation;
