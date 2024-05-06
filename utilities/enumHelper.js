export const ENUMS = {
  systemPlatforms: {
    UN_IDENTIFIED: {
      value: 1,
      display: `UN_IDENTIFIED`,
    },
    WEB_APP: {
      value: 2,
      display: `WEB_APP`,
    },
    ANDROID_APP: {
      value: 3,
      display: "ANDROID_APP",
    },
    IOS_APP: {
      value: 4,
      display: "IOS_APP",
    },
  },
  priority: {
    high: {
      value: 1,
      display: "HIGH",
    },
    medium: {
      value: 2,
      display: "MEDIUM",
    },
    low: {
      value: 3,
      display: "LOW",
    },
    other: {
      value: 4,
      display: "OTHER",
    },
  },
  actionType: {
    create: {
      value: 1,
      display: "CREATE",
    },
    update: {
      value: 2,
      display: "UPDATE",
    },
    delete: {
      value: 3,
      display: "DELETE",
    },
  },
  statusType: {
    active: {
      value: 0,
      display: "ACTIVE",
    },
    inactive: {
      value: 1,
      display: "INACTIVE",
    },
    draft: {
      value: 2,
      display: "DRAFT",
    },
    released: {
      value: 3,
      display: "RELEASED",
    },
    approvedDraft: {
      value: 4,
      display: "APPROVED_DRAFT",
    },
    absent: {
      value: 5,
      display: "ABSENT",
    },

    forAdjustment: {
      value: 6,
      display: "FOR_ADJUSTMENT",
    },
    suspend: {
      value: 7,
      display: "SUSPEND",
    },
    onHold: {
      value: 8,
      display: "ON_HOLD",
    },

    freeze: {
      value: 9,
      display: "FREEZE",
    },
  },
  markedStatus: {
    mark: {
      value: 1,
      display: "MARK",
    },
    unmark: {
      value: 2,
      display: "UNMARK",
    },
  },
  languageType: {
    bangla: { value: "bn", display: "BANGLA" },
    english: { value: "en", display: "ENGLISH" },
  },
  themes: {
    light: { value: 0, display: "LIGHT" },
    dark: { value: 1, display: "DARK" },
  },
  paginationType: {
    default: { value: 1, display: "DEFAULT" },
    scroll: { value: 2, display: "SCROLL" },
  },
  userGroup: {
    employee: {
      value: 1,
      display: "EMPLOYEE",
    },
    stackHolder: {
      value: 2,
      display: "STACK_HOLDER",
    },
    boardOfDirector: {
      value: 3,
      display: "BOARD_OF_DIRECTOR",
    },
    serviceProvider: {
      value: 4,
      display: "SERVICE_PROVIDER",
    },
    systemAdmin: {
      value: 5,
      display: "SYSTEM_ADMIN",
    },
    referrer: {
      value: 6,
      display: "REFERRER",
    },
    other: {
      value: 8,
      display: "OTHER",
    },
  },
  resetPasswordStatus: {
    pending: { value: "PENDING", display: "PENDING" },
    success: { value: "SUCCESS", display: "SUCCESS" },
    failed: { value: "FAILED", display: "FAILED" },
  },
  profession: {
    nursing: { value: "NURSING", display: "NURSING" },
    allied: { value: "ALLIED", display: "ALLIED" },
    locum_tenens: { value: "LOCUM TENENS", display: "LOCUM TENENS" },
    leadership: { value: "LEADERSHIP", display: "LEADERSHIP" },
    non_clinical: { value: "NON CLINICAL", display: "NON CLINICAL" },
  },
  gender: {
    male: { value: "MALE", display: "MALE" },
    female: { value: "FEMALE", display: "FEMALE" },
    other: { value: "OTHER", display: "OTHER" },
  },
  region: {
    asia: { value: "ASIA", display: "ASIA" },
    africa: { value: "AFRICA", display: "AFRICA" },
    northAmerica: { value: "NORTH AMERICA", display: "NORTH AMERICA" },
    southAmerica: { value: "SOUTH AMERICA", display: "SOUTH AMERICA" },
    europe: { value: "EUROPE", display: "EUROPE" },
    oceania: { value: "OCEANIA", display: "EUROPE" },
    other: { value: "OTHER", display: "OTHER" },
  },
  maritalStatus: {
    married: { value: "MARRIED", display: "MARRIED" },
    unmarried: { value: "UNMARRIED", display: "UNMARRIED" },
    other: { value: "OTHER", display: "OTHER" },
  },
  resultCategory: {
    first: { value: "FIRST DIVISION", display: "FIRST DIVISION" },
    second: { value: "SECOND DIVISION", display: "SECOND DIVISION" },
    third: { value: "THIRD DIVISION", display: "THIRD DIVISION" },
  },
  passingYear: {
    2010: { value: "2010", display: "2010" },
    2011: { value: "2011", display: "2011" },
    2012: { value: "2012", display: "2012" },
    2013: { value: "2013", display: "2013" },
    2014: { value: "2014", display: "2014" }
  },
  bloodGroup: {
    aPositive: { value: "A(+)", display: "A(+)" },
    aNegative: { value: "A(-)", display: "A(-)" },
    bPositive: { value: "B(+)", display: "B(+)" },
    bNegative: { value: "B(-)", display: "B(-)" },
    abPositive: { value: "AB(+)", display: "AB(+)" },
    abNegative: { value: "AB(-)", display: "AB(-)" },
    oPositive: { value: "O(+)", display: "O(+)" },
    oNegative: { value: "O(-)", display: "O(-)" },
  },
  experience: {
    fresher: { value: "FRESHER", display: "FRESHER" },
    oneToTwo: { value: "1-2 YEARS", display: "1-2 YEARS" },
    twoToFour: { value: "2-4 YEARS", display: "2-4 YEARS" },
    fourToEight: { value: "4-8 YEARS", display: "4-8 YEARS" },
    eightToFifteen: { value: "8-15 YEARS", display: "8-15 YEARS" },
    fifteenToTwentyFive: { value: "15-25 YEARS", display: "15-25 YEARS" },
  },
  employmentType: {
    travelOrContract: { value: "TRAVEL/CONTRACT", display: "TRAVEL/CONTRACT" },
    perDiem: { value: "PER DIEM", display: "PER DIEM" },
    locum_tenens: { value: "LOCUM TENENS", display: "LOCUM TENENS" },
    workForce_distribution: {
      value: "WORKFORCE DISTRIBUTION",
      display: "WORKFORCE DISTRIBUTION",
    },
    local: { value: "LOCAL", display: "LOCAL" },
    permanent: { value: "PERMANENT", display: "PERMANENT" },
  },
  noticePeriod: {
    immediate: { value: "IMMEDIATE", display: "IMMEDIATE" },
    oneWeek: { value: "1 WEEK", display: "1 WEEK" },
    twoWeeks: { value: "2 WEEKS", display: "2 WEEKS" },
    threeWeeks: { value: "3 WEEKS", display: "3 WEEKS" },
    oneMonth: { value: "1 MONTH", display: "1 MONTH" },
    twoMonths: { value: "2 MONTHS", display: "2 MONTHS" },
    threeMonths: { value: "3 MONTHS", display: "3 MONTHS" },
  },
};

const defaultCreateOptions = ({ key, enumType }) => {
  return { label: enumType[key].display, value: enumType[key].value };
};

export const EnumHelper = ({
  type,
  value,
  display = false,
  property = false,
  color = false,
  options = false,
  createOptions,
}) => {
  const enumType = ENUMS[type];
  const allTheKeys = Object.keys(enumType);

  if (type && value !== undefined) {
    const find = allTheKeys.find((key) => enumType[key].value === value);
    if (display) return enumType[find] ? enumType[find].display : "";
    if (color && find) return enumType[find].color;
    if (property) return find;
    return enumType[find];
  }

  if (type && options) {
    const createdOptions = allTheKeys.map((key) => {
      if (createOptions) return createOptions({ key, enumType });
      return defaultCreateOptions({ key, enumType });
    });
    return createdOptions;
  }
};
