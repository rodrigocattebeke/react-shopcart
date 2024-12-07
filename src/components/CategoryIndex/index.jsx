import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

export const CategoryIndex = () => {
  const location = useLocation();
  const [locationSections, setLocationSections] = useState(null);
  const [pathNotShowedForHref, setPathNotShowedForHref] = useState(null);
  const [pathNotShowed, setPathNotShowed] = useState(["category"]); //Add a path (in lower case) that does not showed on index. Example: category/electronics, in index, is showed inicio > electronics.
  useEffect(() => {
    const getSectionsOfLocation = () => {
      //get the sections of the path.
      const sections = location.pathname.split("/").filter((path) => path.length > 1);

      let sectionsToAdded;
      if (sections.length > 1) {
        if (pathNotShowed.includes(sections[0])) {
          sectionsToAdded = sections.slice(1);
          setPathNotShowedForHref(sections[0]);
        } else {
          sectionsToAdded = sections;
        }
        setLocationSections(sectionsToAdded);
      } else {
        setLocationSections(sections);
      }
    };
    getSectionsOfLocation();
  }, [location.pathname, pathNotShowed]);

  const pathToLiArray = (sectionsArray) => {
    if (!sectionsArray) return;
    let lastPath = `/${pathNotShowedForHref}`;

    let liOfSectionsArray = sectionsArray.map((section, i) => {
      section = decodeURIComponent(section);
      if (i < sectionsArray.length - 1) {
        lastPath += `/${section}`;
        return (
          <li key={section} className={`${styles.prevSection + " " + styles.section}`}>
            <a href={`${lastPath}`}>{`${section[0].toUpperCase() + section.slice(1)}`}</a>
          </li>
        );
      } else {
        return (
          <li key={section} className={`${styles.section}`}>
            <p className="m-0">{`${section[0].toUpperCase() + section.slice(1)}`}</p>
          </li>
        );
      }
    });
    return liOfSectionsArray;
  };

  return !locationSections ? (
    ""
  ) : (
    <div className={`${styles.indexContainer} z-3`}>
      <div className="container">
        <ul className="d-flex m-0">
          <li className={`${styles.prevSection + " " + styles.section}`}>
            <a href="/">Inicio</a>
          </li>
          {pathToLiArray(locationSections)}
        </ul>
      </div>
    </div>
  );
};
