import { Heading } from "./Heading";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";
import { Steps } from "./Steps";
import { Tabs, Tab } from "./Tabs";
import { Table } from "./Table";
import { Terminal } from "./Terminal";
import { LinkCard } from "./LinkCard";
import { Accordion, AccordionItem } from "./Accordion";
import { ApiTable } from "./ApiTable";
import { Badge } from "./Badge";
import { FileTree } from "./FileTree";
import { Image } from "./Image";

export { Accordion, AccordionItem } from "./Accordion";
export { ApiTable } from "./ApiTable";
export { Badge } from "./Badge";
export { Callout } from "./Callout";
export { CodeBlock } from "./CodeBlock";
export { FileTree } from "./FileTree";
export { Heading } from "./Heading";
export { Image } from "./Image";
export { LinkCard } from "./LinkCard";
export { Steps } from "./Steps";
export { Tab, Tabs } from "./Tabs";
export { Terminal } from "./Terminal";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mdxComponents: Record<string, React.ComponentType<any>> = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={1} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={2} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={3} {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading level={4} {...props} />
  ),
  table: Table,
  pre: CodeBlock,
  img: Image,
  Callout,
  Steps,
  Tabs,
  Tab,
  Terminal,
  LinkCard,
  Accordion,
  AccordionItem,
  ApiTable,
  Badge,
  FileTree,
};
