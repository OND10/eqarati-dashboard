import { checkPermissionsForTaps } from "../Providers/permissions/utils";

export interface InnerTabType {
  title: string;
  path: string;
  focused: boolean;
}

export function usersAndPermissionsTabs(focused?: 1 | 2 | 3): InnerTabType[] {
  const allTabs: InnerTabType[] = [
    {
      title: "عرض المستخدمين",
      path: "/common-services/users",
      focused: focused == 1,
    },
    {
      title: "عرض الصلاحيات",
      path: "/common-services/permissions",
      focused: focused == 2,
    },
  ];

  const allowedTabs = checkPermissionsForTaps(allTabs);

  if (allowedTabs.length > 0) {
    if (!focused) {
      allowedTabs[0].focused = true;
    }
  }
    //  console.error("usersAndPermissionsTabs" , allowedTabs)

  return allowedTabs;
}

export function groupsSettingsTabs(focused?: 1) {
  const allTabs: InnerTabType[] = [
    {
      title: "عرض المجموعات",
      path: "/common-services/groups",
      focused: focused == 1,
    },
  ];

  const allowedTabs = checkPermissionsForTaps(allTabs);

  if (allowedTabs.length > 0) {
    if (!focused) {
      allowedTabs[0].focused = true;
    }
  }
  // console.error("groupsSettingsTabs" , allowedTabs)

  return allowedTabs;
}

export function quranReviewTabs(focused?: 1 | 2 | 3, title?: string) {
  const allTabs: InnerTabType[] = [
    {
      title: title && focused == 1 ? title : "استمارات للمراجعة",
      path: "/review-app/forms-for-review",
      focused: focused == 1,
    },
    {
      title: title && focused == 2 ? title : "استماراتي",
      path: "/review-app/my-forms",
      focused: focused == 2,
    },
    {
      title:title && focused == 3 ? title : 'كافة الاستمارات',
      path: "/review-app/all-forms",
      focused: focused == 3,
  },
  ];

  const allowedTabs = checkPermissionsForTaps(allTabs);

  if (allowedTabs.length > 0) {
    if (!focused) {
      allowedTabs[0].focused = true;
    }
  }
  // console.error("quranReviewTabs" , allowedTabs)

  return allowedTabs;
}

export function systemتهيئةTabs(focused?: 1 | 2 | 3) {
  const allTabs: InnerTabType[] = [
    {
      title: "القراءات",
      path: "/quran/recitations",
      focused: focused == 1,
    },
    {
      title: "المسارات والعقد",
      path: "/review-app/paths",
      focused: focused == 2,
    },
    {
      title: "التهيئة السريعة",
      path: "/common-services/inits",
      focused: focused == 3,
    },
  ];

  const allowedTabs = checkPermissionsForTaps(allTabs);

  if (allowedTabs.length > 0) {
    if (!focused) {
      allowedTabs[0].focused = true;
    }
  }

  // console.error("systemتهيئةTabs" , allowedTabs)

  return allowedTabs;
}



