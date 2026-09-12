export default function rehypeTargetBlank() {
  return function (tree) {
    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        node.properties = node.properties || {};
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }

      if (node.children) {
        node.children.forEach(visit);
      }
    };

    visit(tree);
  };
}