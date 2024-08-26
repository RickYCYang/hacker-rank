A = [[1, 3, 4], [2, 2, 3], [1, 2, 4]]


def surfaceArea(A):
    n_rows = len(A)
    n_cols = len(A[0])
    area = n_rows * n_cols * 2  # 上、下兩面的表面積
    for i in range(n_rows):
        for j in range(n_cols):
            val = A[i][j]
            # 處理列與列之間的切面
            if i == 0:
                pre_row_val = 0
            else:
                pre_row_val = A[i - 1][j]
            # 左、右兩面的表面積
            area += abs(val - pre_row_val)
            if i == n_rows - 1:  # 到最後一面時，計算表面積
                area += val
            # 處理欄與欄之間的切面
            if j == 0:
                pre_col_val = 0
            else:
                pre_col_val = A[i][j - 1]
            # 前、後兩面的表面積
            area += abs(val - pre_col_val)
            if j == n_cols - 1:  # 到最後一面時，計算表面積
                area += val
    return area


print(surfaceArea(A))
