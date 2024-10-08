import {
  dateFormat,
  moneyFormat,
  numberFormat,
  phoneFormat,
  identityFormat,
  emailFormat,
  nameFormat,
  toCamelFormat,
  stripFormat,
  truncateFormat,
  bankCardFormat,
  toUpperCaseFormat,
  toLowerCaseFormat,
  toLowerLineFormat,
  desensitizationFormat,
  bigNumberTransform,
  noDataFormat,
  urlParmasFormat,
  compareVersion,
  timeAgoFormat
} from '../src/index.js';

describe('测试', () => {
  test('测试dateFormat', () => {
    expect(dateFormat('2022/01/02')).toBe('2022-01-02');
  });

  test('测试moneyFormat', () => {
    expect(moneyFormat('10000')).toBe('10,000.00');
  });

  test('测试numberFormat', () => {
    expect(numberFormat('10000')).toBe('10,000');
  });

  test('测试phoneFormat', () => {
    expect(phoneFormat('17612341234')).toBe('176****1234');
  });

  test('测试identityFormat', () => {
    expect(identityFormat('330921199110253510')).toBe('330***********3510');
  });

  test('测试emailFormat', () => {
    expect(emailFormat('1234abcdefg@163.com')).toBe('123****@163.com');
  });

  test('测试nameFormat', () => {
    expect(nameFormat('王丫丫', 1)).toBe('王**');
    expect(nameFormat('王丫丫', 2, 1)).toBe('*丫丫');
  });

  test('测试desensitizationFormat', () => {
    expect(desensitizationFormat('浙江省杭州市', 2, 1)).toBe('浙江***市');
    expect(desensitizationFormat('浙江省杭州市', 2, 0)).toBe('浙江****');
    expect(desensitizationFormat('浙江省杭州市', 0, 2)).toBe('****州市');
  });

  test('测试toCamelFormat', () => {
    expect(toCamelFormat('A_B_C')).toBe('ABC');
    expect(toCamelFormat('a_b_c')).toBe('aBC');
    expect(toCamelFormat('a隔b隔c', '隔')).toBe('aBC');
  });

  test('测试stripFormat', () => {
    expect(stripFormat('  abc df ')).toBe('abcdf');
    expect(stripFormat('  abc df ', 'trim')).toBe('abc df');
    expect(stripFormat('  abc df ', 'head')).toBe('abc df ');
    expect(stripFormat('  abc df ', 'tail')).toBe('  abc df');
  });

  test('测试truncateFormat', () => {
    expect(truncateFormat('abcdefghigklmn', 6)).toBe('abcdef...');
    expect(truncateFormat('abcdefghigklmn', 100)).toBe('abcdefghigklmn');
    expect(truncateFormat('abcdefghigklmn', 6, '等等')).toBe('abcdef等等');
  });

  test('测试bankCardFormat', () => {
    expect(bankCardFormat('6212268202014638888', 6)).toBe('6212 **** **** 8888');
  });

  test('测试toUpperCaseFormat', () => {
    expect(toUpperCaseFormat('abc123', 6)).toBe('ABC123');
  });

  test('测试toLowerCaseFormat', () => {
    expect(toLowerCaseFormat('ABC123', 6)).toBe('abc123');
  });

  test('测试toLowerLineFormat', () => {
    expect(toLowerLineFormat('isBetter', 6)).toBe('is_better');
    expect(toLowerLineFormat('IsBetter', 6)).toBe('is_better');
  });

  test('测试bigNumberTransform', () => {
    expect(bigNumberTransform(100000000)).toBe('1亿');
    expect(bigNumberTransform(100000)).toBe('10万');
    expect(bigNumberTransform(1000)).toBe('1千');
    expect(bigNumberTransform(100)).toBe('100');
  });
  test('测试noDataFormat', () => {
    expect(noDataFormat(null)).toBe('');
    expect(noDataFormat('null')).toBe('');
    expect(noDataFormat(undefined)).toBe('');
    expect(noDataFormat('undefined')).toBe('');
    expect(noDataFormat(undefined, '-')).toBe('-');
  });
  test('测试urlParmasFormat', () => {
    expect(urlParmasFormat('a=1&b=2')).toStrictEqual({ a: '1', b: '2' });
  });
  test('测试compareVersion', () => {
    expect(compareVersion('2.0.0', '1.2.0')).toBe(1);
    expect(compareVersion('2.0.0', '2.2.0')).toBe(-1);
    expect(compareVersion('2.0.1', '2.0.1')).toBe(0);
  });
  test('测试timeAgoFormat', () => {
    {
      const now = new Date();
      const dateInput = new Date(now.getTime() - 50 * 1000); // 50 seconds ago
      const result = timeAgoFormat(dateInput);
      expect(result).toBe('刚刚');
    }

    {
      const now = new Date();
      const dateInput = new Date(now.getTime() - 30 * 60 * 1000); // 30 minutes ago
      const result = timeAgoFormat(dateInput);
      expect(result).toBe('30分钟前');
    }

    {
      const now = new Date();
      const dateInput = new Date(now.getTime() - 2 * 3600 * 1000); // 2 hours ago
      const result = timeAgoFormat(dateInput);
      expect(result).toBe('2小时前');
    }

    {
      const now = new Date();
      const dateInput = new Date(now.getTime() - 1 * 86400 * 1000); // 1 day ago
      const result = timeAgoFormat(dateInput);
      expect(result).toBe('1天前');
    }

    {
      const dateInput = new Date(2023, 1, 15); // April 15, 2023 10:30:45
      const result = timeAgoFormat(dateInput, 'yyyy-MM-dd');
      const expected = '2023-02-15';
      expect(result).toBe(expected);
    }
  });
});
