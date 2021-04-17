"""

algorithm performance

O(N)

where N is array len

"""


def decode(a):
    var_len = len(a)
    mid_var = int(var_len / 2)

    first_sum = 0
    second_sum = 0
    rest = a[-1]

    second_mid_sum = []
    second_mid_rest = []
    results = []

    for p_position in range(mid_var):

        n_position = -1 * p_position

        first_sum += a[p_position]
        second_sum += a[n_position - 1]
        rest -= a[n_position - 2]

        second_mid_sum.append(second_sum)
        second_mid_rest.append(rest)

        if first_sum in second_mid_sum and p_position > 0:
            results.append(first_sum)

        if first_sum in second_mid_rest and p_position > 0:
            results.append(first_sum)

    print(results[0])

    return results[0]


decode([2, 2, 2, 2, 2, 2, 2, 6, 10, 3, 1, 5, 2, 5, 3, 1, 3, 14])
