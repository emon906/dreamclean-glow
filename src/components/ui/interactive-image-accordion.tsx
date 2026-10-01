import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageAccordionItem {
  title: string;
  image: string;
}

export function InteractiveImageAccordion({ items }: { items: ImageAccordionItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="accordion-shell" role="list" aria-label="Cleaning specialties">
      {items.map((item, index) => (
        <button
          key={item.title}
          type="button"
          className={cn("accordion-panel group", active === index && "is-active")}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
          aria-pressed={active === index}
          role="listitem"
        >
          <img src={item.image} alt="" loading="lazy" width={1600} height={1000} />
          <span className="accordion-shade" />
          <span className="accordion-index">0{index + 1}</span>
          <span className="accordion-title">{item.title}</span>
          <span className="accordion-arrow" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </button>
      ))}
    </div>
  );
}