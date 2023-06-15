const obj = { name: '뉴진', company: 'Company, Inc.' };

obj['email'] = 'newgene@email.com';

// for
for (const key in obj) {
    console.log('key:', key, 'obj[key]', obj[key]);
}
// key: name obj[key] 뉴진
// key: company obj[key] Company, Inc.
// key: email obj[key] newgene @email.com