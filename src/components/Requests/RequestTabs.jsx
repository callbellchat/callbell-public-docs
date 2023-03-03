import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export default function RequestTabs(props) {
  const snippets = [
    {
      key: "bash",
      component: require(`../../snippets/curl/${props.endpoint}/_${props.request}.mdx`),
      value: "cURL",
    },
    {
      key: "node",
      component: require(`../../snippets/node/${props.endpoint}/_${props.request}.mdx`),
      value: "Node",
    },
    {
      key: "ruby",
      component: require(`../../snippets/ruby/${props.endpoint}/_${props.request}.mdx`),
      value: "Ruby",
    },
    {
      key: "go",
      component: require(`../../snippets/go/${props.endpoint}/_${props.request}.mdx`),
      value: "Go",
    },
    {
      key: "php",
      component: require(`../../snippets/php/${props.endpoint}/_${props.request}.mdx`),
      value: "PHP",
    },
    {
      key: "python",
      component: require(`../../snippets/python/${props.endpoint}/_${props.request}.mdx`),
      value: "Python",
    },
  ];

  return (
    <>
      <Tabs groupId="programming-language">
        {snippets.map((snippet, id) => {
          const Component = snippet.component;

          return (
            <TabItem
              key={id}
              value={snippet.value}
              label={snippet.value}
              default
            >
              <Component.default />
            </TabItem>
          );
        })}
      </Tabs>
    </>
  );
}
