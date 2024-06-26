"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Navigation() {
  return (
    <Navbar shouldHideOnScroll isBordered className={jetbrains.className}>
      <NavbarBrand className="font-bold text-xl">
        &#123; QINSYL &#125;
      </NavbarBrand>
      <NavbarContent justify="end">
        {/* <NavbarItem>
          <Button
            radius="full"
            size="sm"
            as={Link}
            href="#contact"
            variant="ghost"
          >
            Contact
          </Button>
        </NavbarIte m> */}
        <NavbarItem>
          <Button
            radius="full"
            size="sm"
            as={Link}
            href="#project"
            variant="ghost"
          >
            Project
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
