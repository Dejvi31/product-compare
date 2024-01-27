export const useBreadCrumbs = (selectedProduct) => {
  if (!selectedProduct) {
    return [];
  }

  const homeBreadcrumb = { name: "Home", url: "/" };

  if (
    selectedProduct.category !== undefined &&
    selectedProduct.name !== undefined
  ) {
    const categoryBreadcrumb = {
      name: selectedProduct.category,
      url: `/${selectedProduct.category.toLowerCase()}`,
    };

    const productBreadcrumb = {
      name: selectedProduct.name,
      url: `/${selectedProduct.category.toLowerCase()}/${selectedProduct.name}`,
    };

    const breadcrumbs = [homeBreadcrumb, categoryBreadcrumb, productBreadcrumb];
    return breadcrumbs;
  } else if (selectedProduct.category !== undefined) {
    const categoryBreadcrumb = {
      name: selectedProduct.category,
      url: `/${selectedProduct.category.toLowerCase()}`,
    };

    const breadcrumbs = [homeBreadcrumb, categoryBreadcrumb];
    return breadcrumbs;
  }

  return [homeBreadcrumb];
};
