import React from "react";
import Link from "next/link";

interface ReferLink {
  href: string;
  text: string;
}

interface ReferLinksProps {
  links: ReferLink[];
}

const ReferLinks: React.FC<ReferLinksProps> = ({ links }) => {
  return (
    <div className="component fpt-container p-b-25-mb p-b-40 p-t-20-mb p-t-35">
      <div className="component-content">
        <div className="component two-cols-text-with-image text-6-image-6__type-4 text-6-image-6 text-6-image-6__type-7 p-b-10-mb p-t-0-mb">
          <div className="component-content">
            <div className="fpt-container container-grid-12">
              <div className="row">
                <div className="refer-links">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="refer-links__item icon-orange"
                    >
                      <div>
                        <span>{link.text}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferLinks;
