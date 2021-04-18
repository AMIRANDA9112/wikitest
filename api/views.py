from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
import json


# Create your views here.

@api_view(["POST", "GET"])
def ArrayView(a):
    try:

        a = json.loads(a.body)
        print("array loaded", a)
        a = a["content"]
        c = []
        last_number = "0"

        for n in a:

            if n != ',' and n != " ":

                try :
                    int(last_number)
                    n = last_number + n

                except:
                    pass

                try:
                    c.append(int(n))
                    print(c)

                except:
                    return Response(status=status.HTTP_200_OK, data={"data": "This array no have key"})

            last_number = n

        mid_var = int(len(c) / 2)
        first_sum = 0
        second_sum = 0
        rest = c[-1]

        second_mid_sum = []
        second_mid_rest = []
        results = []

        for p_position in range(mid_var):

            n_position = -1 * p_position

            first_sum += c[p_position]
            second_sum += c[n_position - 1]
            rest -= c[n_position - 2]

            second_mid_sum.append(second_sum)
            second_mid_rest.append(rest)

            if first_sum in second_mid_sum and p_position > 0:
                results.append(first_sum)

            if first_sum in second_mid_rest and p_position > 0:
                results.append(first_sum)

        if results:

            index = str(results[0])
            print("index encode from array is", index)

            return Response(status=status.HTTP_200_OK, data={"data": index})

        else:
            return Response(status=status.HTTP_200_OK, data={"data": "This array no have key"})

    except ValueError as e:
        return Response(e.args[0], status.HTTP_400_BAD_REQUEST)
