
// Oliver Kovacs 2020

const shor = n => {
    let i = 0, g = 2, pwr;
    while (true) {
        i += 2;
        pwr = Math.pow(Math.pow(g, i), i / 2);
        if (!Number.isFinite(pwr)) {
            i = 0;
            g++;
            continue;
        }
        if (gcd(pwr - 1, n) == 1 && gcd(pwr + 1, n) == 1) continue;
        if (gcd(pwr - 1, n) != 1) return [gcd(pwr - 1, n), n / gcd(pwr - 1, n)];
        return [gcd(pwr + 1, n), n / gcd(pwr + 1, n)];
    }
};

const gcd = (a, b) => {
    if (b > a) b = a + (a = b) - b;
    while (true) {
        if (a % b == 0) return b;
        b = a % (a = b);
    }
};

const brute_force = n => {
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) return [i, n / i];
    }
};

const demo = () => {
    let n = 41997101*41997107;

    let ms = Date.now();
    console.log(shor(n));
    console.log(`${Date.now() - ms}ms`);

    ms = Date.now();
    console.log(brute_force(n));
    console.log(`${Date.now() - ms}ms`);
};

demo();