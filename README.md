# How to Convert a View-Only Google Doc to a PDF On Google Drive

This guide provides tools to convert view-only Google Docs to PDF format. Choose the method that works best for your specific document and requirements.

**Note:** These tools are intended for legitimate personal use, such as creating offline copies of documents you have access to.

## Languages / Ngôn ngữ

- **English** (default)
- **Tiếng Việt** - [Xem hướng dẫn tiếng Việt ở đây](#vietnamese)
- **Français** - [Voir le guide en français](#french)
- **Español** - [Ver guía en español](#spanish)
- **中文** - [查看中文指南](#chinese)

## Available Tools

### 1. Standard PDF Converter

Basic tool to convert a view-only Google Doc to PDF.

- Fast conversion
- Works with most view-only documents
- Standard quality output

**How to use:**

1. Open the view-only Google Doc in your browser
2. Scroll through the entire document to ensure all pages are loaded
3. Press F12 (or right-click anywhere and select "Inspect" from the menu)
4. When a new panel opens, click on "Console" at the top
5. Copy the code from the [script.js](script.js) file and paste it into the Console
6. Press Enter and wait a few seconds for your PDF to download automatically!

### 2. High-Resolution Converter

Enhanced tool for high-quality PDF conversion with better image quality.

- Higher quality output
- Better for documents with images and diagrams
- Takes longer to process

**How to use:**

1. Open the view-only Google Doc in your browser
2. Use Ctrl/Cmd + "+" to zoom in for better quality (2-3 times)
3. Scroll slowly through the entire document from top to bottom
4. Press F12 (or right-click anywhere and select "Inspect")
5. Click on "Console" at the top of the new panel
6. Copy and paste the code from [high_res_script.js](high_res_script.js) into the Console
7. Press Enter and wait patiently - this will take longer but give better quality!

### 3. Bookmarklet (Easiest Method)

Create a browser bookmark for one-click conversion.

- Most convenient method
- No need to open Developer Tools
- Works directly from your bookmarks bar

**Setup Instructions:**

1. Create a new bookmark in your browser
2. Name it "Save Google Doc to PDF"
3. Instead of a URL, paste the entire code from the [bookmarklet.js](bookmarklet.js) file
4. When viewing a Google Doc, click the bookmark to convert it to PDF

### 4. Image Extractor

Extract individual page images instead of creating a PDF.

- Highest possible quality
- Each page is saved as a separate PNG image
- Good for documents with specific formatting

**How to use:**

1. Open the view-only Google Doc in your browser
2. Scroll through the entire document to load all pages
3. Open Developer Tools (F12) and go to Console tab
4. Copy and paste the code from [image_extractor.js](image_extractor.js)
5. Each page will download as a separate PNG file

## Additional Methods

### Print to PDF Method

For documents with less restrictive settings:

1. Open the view-only Google Doc
2. Press Ctrl + P (Windows) or Cmd + P (Mac)
3. In the printer options, select "Save as PDF"
4. Choose your desired save location
5. Click "Save"

Note: This method may be blocked in documents with printing disabled.

### Mobile Basic View Method

This method uses Google's mobile view to bypass some restrictions:

1. Open the view-only Google Doc in your browser
2. In the URL bar, replace "edit" at the end with "mobilebasic"
3. Press Enter to load the new URL
4. Right-click and select "Save as" > "Webpage, HTML Only"
5. Open the HTML file in your browser
6. Print to PDF (Ctrl/Cmd + P)

### HTML Download and Convert Method

For documents that allow HTML downloads:

1. Open the view-only Google Doc
2. Click on "File" > "Download" > "Web Page (.html, zipped)"
3. Extract the downloaded ZIP file
4. Open the HTML file in your browser
5. Use the print function (Ctrl + P or Cmd + P)
6. Select "Save as PDF"
7. Save your file

## Tips and Troubleshooting

- **Missing pages?** Scroll through the entire document before running any script
- **Want better quality?** Use the high-resolution script or zoom in before converting
- **Document too large?** Try processing in sections or use the image extraction method
- **Best browsers to use:** Chrome or Firefox work best with these methods
- **Getting errors?** Try a different method from the options above

## <a name="vietnamese"></a>Công Cụ Chuyển Đổi Google Doc sang PDF

Trang này cung cấp các công cụ để chuyển đổi tài liệu Google Docs chỉ xem sang định dạng PDF. Hãy chọn phương pháp phù hợp nhất với tài liệu và yêu cầu cụ thể của bạn.

**Lưu ý:** Các công cụ này được thiết kế cho mục đích sử dụng cá nhân hợp pháp, chẳng hạn như tạo bản sao ngoại tuyến của tài liệu mà bạn có quyền truy cập.

### Các Công Cụ Có Sẵn

#### 1. Công Cụ Chuyển Đổi PDF Tiêu Chuẩn

Công cụ cơ bản để chuyển đổi tài liệu Google Doc chỉ xem sang PDF.

- Chuyển đổi nhanh
- Hoạt động với hầu hết các tài liệu chỉ xem
- Chất lượng đầu ra tiêu chuẩn

**Cách sử dụng:**

1. Mở tài liệu Google Doc chỉ xem trong trình duyệt của bạn
2. Cuộn qua toàn bộ tài liệu từ trên xuống dưới để đảm bảo tất cả được tải
3. Nhấn phím F12 (hoặc nhấp chuột phải và chọn "Kiểm tra" từ menu)
4. Khi một bảng mới mở ra, nhấp vào "Console" ở phía trên
5. Sao chép mã từ tệp [script.js](script.js) và dán vào Console
6. Nhấn Enter và đợi vài giây để PDF của bạn tự động tải xuống!

**Cách sử dụng (hướng dẫn chi tiết):**

1. **Bước 1:** Mở tài liệu Google Doc chỉ xem trong trình duyệt Chrome hoặc Firefox
2. **Bước 2:** Cuộn qua toàn bộ tài liệu từ trên xuống dưới để đảm bảo tất cả được tải (cuộn chậm qua mỗi trang)
3. **Bước 3:** Nhấn phím F12 trên bàn phím
4. **Bước 4:** Khi một cửa sổ mới hiện ra bên phải màn hình, nhấp vào tab "Console" ở hàng trên cùng của cửa sổ đó
5. **Bước 5:**
   - Trước tiên, tải tệp script.js từ repository này
   - Mở file script.js đã tải về bằng Notepad hoặc bất kỳ trình soạn thảo văn bản nào
   - Chọn tất cả nội dung trong file (Ctrl+A), sau đó sao chép (Ctrl+C)
6. **Bước 6:** Quay lại tab Console, nhấp vào vùng trống và dán mã (Ctrl+V)
7. **Bước 7:** Nhấn Enter và đợi vài giây
8. **Bước 8:** Trình duyệt sẽ tự động tải xuống tệp PDF của bạn. Tìm nó trong thư mục Downloads trên máy tính của bạn.

*Lưu ý: Nếu bạn không thấy tab Console, hãy nhấp vào dấu >> ở hàng trên cùng để hiển thị tất cả các tab.*

#### 2. Công Cụ Chuyển Đổi Độ Phân Giải Cao

Công cụ nâng cao cho việc chuyển đổi PDF chất lượng cao với hình ảnh tốt hơn.

- Chất lượng đầu ra cao hơn
- Tốt hơn cho các tài liệu có hình ảnh và sơ đồ
- Mất nhiều thời gian xử lý hơn

**Cách sử dụng:**

1. Mở tài liệu Google Doc chỉ xem trong trình duyệt của bạn
2. Sử dụng Ctrl/Cmd + "+" để phóng to để có chất lượng tốt hơn (2-3 lần)
3. Cuộn chậm qua toàn bộ tài liệu từ trên xuống dưới
4. Nhấn phím F12 (hoặc nhấp chuột phải và chọn "Kiểm tra")
5. Nhấp vào "Console" ở phía trên của bảng mới
6. Sao chép và dán mã từ tệp [high_res_script.js](high_res_script.js) vào Console
7. Nhấn Enter và chờ đợi kiên nhẫn - quá trình này sẽ mất nhiều thời gian hơn nhưng cho chất lượng tốt hơn!

**Cách sử dụng (hướng dẫn chi tiết):**

1. **Bước 1:** Mở tài liệu Google Doc chỉ xem trong trình duyệt Chrome hoặc Firefox
2. **Bước 2:** Phóng to tài liệu để có chất lượng cao hơn bằng cách:
   - Nhấn và giữ phím Ctrl trên bàn phím
   - Đồng thời nhấn phím + (dấu cộng) 2-3 lần
   - Bạn sẽ thấy tài liệu phóng to hơn
3. **Bước 3:** Cuộn THẬT CHẬM qua toàn bộ tài liệu từ trên xuống dưới, đảm bảo mỗi trang đều được tải hoàn toàn
4. **Bước 4:** Nhấn phím F12 trên bàn phím
5. **Bước 5:** Khi một cửa sổ mới hiện ra bên phải màn hình, nhấp vào tab "Console" ở hàng trên cùng
6. **Bước 6:**
   - Tải về file high_res_script.js từ repository này
   - Mở file đã tải bằng Notepad hoặc bất kỳ trình soạn thảo văn bản nào
   - Chọn tất cả văn bản (Ctrl+A), sau đó sao chép (Ctrl+C)
7. **Bước 7:** Quay lại tab Console, nhấp vào vùng trống và dán mã đã sao chép (Ctrl+V)
8. **Bước 8:** Nhấn Enter và đợi - quá trình này sẽ mất nhiều thời gian hơn phương pháp 1 (từ 30 giây đến vài phút tùy thuộc vào độ dài của tài liệu)
9. **Bước 9:** Trình duyệt sẽ tự động tải xuống tệp PDF. Kiểm tra thư mục Downloads trên máy tính của bạn.

*Lưu ý: Phương pháp này tạo ra PDF chất lượng cao hơn nhưng mất nhiều thời gian hơn. Hãy kiên nhẫn chờ đợi.*

#### 3. Bookmarklet (Phương Pháp Đơn Giản Nhất)

Tạo một bookmark trình duyệt để chuyển đổi bằng một cú nhấp chuột.

- Phương pháp thuận tiện nhất
- Không cần mở Developer Tools
- Hoạt động trực tiếp từ thanh bookmarks của bạn

**Hướng Dẫn Cài Đặt:**

1. Tạo một bookmark mới trong trình duyệt của bạn
2. Đặt tên là "Lưu Google Doc sang PDF"
3. Thay vì URL, dán toàn bộ mã từ tệp [bookmarklet.js](bookmarklet.js)
4. Khi xem Google Doc, nhấp vào bookmark để chuyển đổi

**Hướng Dẫn Cài Đặt (chi tiết):**

1. **Bước 1:** Đầu tiên, hãy bật thanh bookmark trong trình duyệt:
   - Trong Chrome: Nhấp vào ba chấm ở góc trên bên phải > Chọn Bookmarks > Hiển thị thanh bookmark
   - Trong Firefox: Nhấp chuột phải vào thanh trên cùng > Chọn Thanh Bookmark
2. **Bước 2:** Tải tệp bookmarklet.js từ repository này
3. **Bước 3:** Mở tệp vừa tải về bằng Notepad (nhấp chuột phải vào tệp > Chọn Open with > Notepad)
4. **Bước 4:** Chọn và sao chép tất cả nội dung trong tệp (Ctrl+A để chọn tất cả, sau đó Ctrl+C để sao chép)
5. **Bước 5:** Tạo bookmark mới:
   - Nhấp chuột phải vào thanh bookmark > Chọn "Thêm trang" hoặc "Add page"
   - Hoặc bạn cũng có thể nhấn Ctrl+D để mở hộp thoại thêm bookmark
6. **Bước 6:** Trong hộp thoại bookmark:
   - Đặt tên là "Lưu Google Doc sang PDF" (hoặc bất kỳ tên nào bạn dễ nhớ)
   - Trong trường URL hoặc địa chỉ, xóa nội dung hiện tại và dán mã bạn đã sao chép (Ctrl+V)
   - Nhấp "Lưu" hoặc "Save"
7. **Bước 7:** Bây giờ, mỗi khi bạn đang xem một Google Doc:
   - Đảm bảo bạn đã cuộn qua toàn bộ tài liệu một lần
   - Nhấp vào bookmark "Lưu Google Doc sang PDF" bạn vừa tạo
   - Tài liệu PDF sẽ được tạo và tải xuống tự động

*Lưu ý: Đây là phương pháp đơn giản nhất vì bạn chỉ cần cài đặt một lần và sau đó có thể dùng lại nhiều lần chỉ với một cú nhấp chuột.*

#### 4. Công Cụ Trích Xuất Hình Ảnh

Trích xuất hình ảnh từng trang thay vì tạo tệp PDF.

- Chất lượng cao nhất có thể
- Mỗi trang được lưu dưới dạng hình ảnh PNG riêng biệt
- Tốt cho các tài liệu có định dạng đặc biệt

**Cách sử dụng:**

1. Mở tài liệu Google Doc chỉ xem trong trình duyệt của bạn
2. Cuộn qua toàn bộ tài liệu để tải tất cả các trang
3. Mở Developer Tools (F12) và chuyển đến tab Console
4. Sao chép và dán mã từ tệp [image_extractor.js](image_extractor.js)
5. Mỗi trang sẽ được tải xuống dưới dạng tệp PNG riêng biệt

**Cách sử dụng (hướng dẫn chi tiết):**

1. **Bước 1:** Mở tài liệu Google Doc chỉ xem trong trình duyệt Chrome hoặc Firefox
2. **Bước 2:** Cuộn chậm qua toàn bộ tài liệu từ đầu đến cuối để đảm bảo tất cả các trang đều được tải hoàn toàn
3. **Bước 3:** Mở Developer Tools bằng cách nhấn phím F12 trên bàn phím
4. **Bước 4:** Trong bảng điều khiển mới hiện ra, nhấp vào tab "Console" ở hàng trên cùng
   - Nếu bạn không thấy tab Console, hãy nhấp vào biểu tượng >> để hiển thị thêm tab
5. **Bước 5:** Tải và sử dụng script:
   - Tải tệp image_extractor.js từ repository này
   - Mở file bằng Notepad (nhấp chuột phải > Open with > Notepad)
   - Chọn tất cả nội dung (Ctrl+A) và sao chép (Ctrl+C)
6. **Bước 6:** Quay lại tab Console trong trình duyệt, nhấp vào vùng trống, và dán mã vừa sao chép (Ctrl+V)
7. **Bước 7:** Nhấn Enter và đợi trong khi script chạy
8. **Bước 8:** Trình duyệt sẽ tải xuống mỗi trang dưới dạng một file PNG riêng biệt
   - Bạn có thể được yêu cầu cho phép tải nhiều file cùng lúc - hãy nhấp "Allow" hoặc "Cho phép"
9. **Bước 9:** Kiểm tra thư mục Downloads để tìm tất cả các tệp hình ảnh

*Lưu ý: Phương pháp này tạo ra nhiều file hình ảnh riêng biệt thay vì một tệp PDF duy nhất. Đây là cách tốt nhất để có được chất lượng cao nhất.*

### Các Phương Pháp Bổ Sung

#### Phương Pháp In sang PDF

Cho các tài liệu có cài đặt ít hạn chế hơn:

1. Mở tài liệu Google Doc chỉ xem
2. Nhấn Ctrl + P (Windows) hoặc Cmd + P (Mac)
3. Trong tùy chọn máy in, chọn "Lưu dưới dạng PDF" hoặc "Save as PDF"
4. Chọn vị trí lưu mong muốn
5. Nhấp vào "Lưu" hoặc "Save"

*Lưu ý: Phương pháp này có thể bị chặn trong các tài liệu có tính năng in bị vô hiệu hóa.*

#### Phương Pháp Chế Độ Xem Di Động Cơ Bản

Phương pháp này sử dụng chế độ xem di động của Google để vượt qua một số hạn chế:

1. Mở tài liệu Google Doc chỉ xem trong trình duyệt của bạn
2. Trong thanh địa chỉ, thay thế phần cuối (thường là "edit") bằng "mobilebasic"
3. Nhấn Enter để tải URL mới
4. Nhấp chuột phải và chọn "Lưu dưới dạng" > "Trang web, Chỉ HTML"
5. Mở tệp HTML trong trình duyệt của bạn
6. In sang PDF (Ctrl/Cmd + P)

#### Phương Pháp Tải xuống HTML và Chuyển đổi

Đối với tài liệu cho phép tải xuống HTML:

1. Mở tài liệu Google Doc chỉ xem
2. Nhấp vào "Tệp" hoặc "File" > "Tải xuống" hoặc "Download" > "Trang web (.html, nén)"
3. Giải nén tệp ZIP đã tải xuống
4. Mở tệp HTML trong trình duyệt của bạn
5. Sử dụng chức năng in (Ctrl + P hoặc Cmd + P)
6. Chọn "Lưu dưới dạng PDF"
7. Lưu tệp của bạn

### Mẹo và Xử Lý Sự Cố

- **Thiếu trang?** Cuộn qua toàn bộ tài liệu trước khi chạy bất kỳ script nào
- **Muốn chất lượng tốt hơn?** Sử dụng script độ phân giải cao hoặc phóng to trước khi chuyển đổi
- **Tài liệu quá lớn?** Thử xử lý theo từng phần hoặc sử dụng phương pháp trích xuất hình ảnh
- **Trình duyệt tốt nhất để sử dụng:** Chrome hoặc Firefox hoạt động tốt nhất với những phương pháp này
- **Gặp lỗi?** Thử một phương pháp khác từ các tùy chọn trên

## <a name="french"></a>Outils de Conversion de Google Doc en PDF

[Placeholder for French translation]

## <a name="spanish"></a>Herramientas de Conversión de Google Doc a PDF

[Placeholder for Spanish translation]

## <a name="chinese"></a>Google Doc 转 PDF 转换工具

[Placeholder for Chinese translation]

## Credits

This project was created by **Thành Nguyễn**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
