export function getSubCategories(categories, parentId) {
  const subCategories = categories.filter(
    category => category.parent_id === parentId,
  );

  subCategories.forEach(category => {
    category.subCategories = getSubCategories(categories, category.id);
  });

  return subCategories;
}
