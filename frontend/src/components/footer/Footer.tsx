"use client";

import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

export function FooterComponents() {
  return (
    <div className="flex flex-col  container mx-auto mds:max-w-[1024px]">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/oranges.png"
              alt="utkutoygunbektasoglu"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/me/about">Me</Footer.Link>
                <Footer.Link href="#">S.S.S</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/utkbkts" target="_blank">
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/utku-bektasoglu"
                  target="_blank"
                >
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://github.com/utkbkts"
              target="_blank"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/utku-bektasoglu"
              target="_blank"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.youtube.com/@Fluent-Moments"
              target="_blank"
              icon={BsYoutube}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
