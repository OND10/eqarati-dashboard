import { SideMenuCategory } from '../../../common/components/UI/menus/sideMenu/side-menu-template';
import { store } from '../../../services/Redux/store';
import { InnerTabType } from '../../routes/grouped-routs';

export const checkPermissionsNesting = (
  categories: SideMenuCategory[]
): SideMenuCategory[] => {
  const routeLevels = store.getState().routePermission;
  const filteredCategories = categories
    .map((category, index) => {
      const filteredChildren = category.children.filter(
        (child) =>
          routeLevels.levelTwo.includes(child.path) ||
          routeLevels.levelThree.includes(child.path)
      );

      return filteredChildren.length > 0
        ? { ...category, children: filteredChildren }
        : null;
    })
    .filter(Boolean) as SideMenuCategory[];

  return filteredCategories;
};

export const checkPermissionsForTaps = (
  tabs: InnerTabType[]
): InnerTabType[] => {
  const routeLevels = store.getState().routePermission;
  // console.log("checkPermissionsForTaps",routeLevels)

  const filteredTabs = tabs.filter((child) => {
    return (
      routeLevels.levelTwo.includes(child.path) ||
      routeLevels.levelThree.includes(child.path)
    );
  });
  // console.log("filteredChildren",filteredTabs)

  return filteredTabs.length > 0 ? filteredTabs : [];
};
