# Bài 2: 
Liệt kê các file theo từng vùng sau khi thao tác một loạt các lệnh sau:

## a. Tạo 3 file: file1, file2, file3
- Local: file1,file2,file3 | Working: Trống | Staging: Trống | Repo: Trống
## b. Chạy lệnh: git init
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: Trống | Repo: Trống
## c. Chạy lệnh: git add file1
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1 | Repo: Trống
## d. Chạy lệnh: git commit -m”first commit”
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1 | Repo: file1
- file1: đã đưa lên vùng Repository với commit có message là "first commit" ở dòng lệnh d
## e. Chạy lệnh: git add file2 file3
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1,file2,file3 | Repo: file1
## f. Chạy lệnh: git restore --staged file3
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1,file2 | Repo: file1
- file3 đã được restore từ vùng **staging** về vùng **working directory**
## h. Chạy lệnh: git commit -m"second commit"
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1,file2 | Repo: file1,file2
- file2: đã đưa lên vùng **Repository** với commit có message là "second commit" ở dòng lệnh h
## i. Chạy lệnh: git reset HEAD~1
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1 | Repo: file1
- file2 đã được restore từ vùng **Repository** về thẳng vùng **Working directory**