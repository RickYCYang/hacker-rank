def organizingContainers(container):
    length = len(container)
    type_balls = [0] * length
    for i in range(length):
        for j in range(length):
            type_balls[j] += container[i][j]
            type_container = [sum(container[i]) for i in range(length)]
    print("type_balls", type_balls)
    print("type_container", type_container)

    type_container.sort()
    type_balls.sort()

    if type_container == type_balls:
        return "Possible"
    else:
        return "Impossible"


# print(
#     organizingContainers(
#         [
#             [1, 3, 1],
#             [2, 1, 2],
#             [3, 3, 3],
#         ]
#     )
#     == "Impossible"
# )

# print(
#     organizingContainers(
#         [
#             [0, 2, 1],
#             [1, 1, 1],
#             [2, 0, 0],
#         ],
#     )
#     == "Possible"
# )

print(
    organizingContainers(
        [[1, 1], [1, 1]],
    )
    == "Possible"
)
