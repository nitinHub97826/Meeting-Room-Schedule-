
		downloadFile = async (params) => {
			const { Url, payload, OnError, contentType } = params			
			const self = this
			$.ajax({
				type: 'Post',
				url: `${API_URL}/${Url}`,
				contentType: contentType==null?"application/json; charset=utf-8":contentType,
				processData: false,
				xhr: function () {
					var xhr = new XMLHttpRequest()
					xhr.onreadystatechange = function () {
						if (xhr.readyState == 2) {
							if (xhr.status == 200) {
								xhr.responseType = "blob";
							} 
							else {
								xhr.responseType = "text";
							}
						}
					}
					return xhr
				},
				global: false,
				data: contentType==null?JSON.stringify(payload):payload,
				success: async function (response, status, xhr) {
					
				
					const url = URL.createObjectURL(new Blob([response]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', xhr.getResponseHeader("filename"));
					document.body.appendChild(link);
					link.click();
					URL.revokeObjectURL(url);
				},
				error: async function (xhr, ajaxOptions, thrownError) {
					
				console.log(xhr.responseText)

				}

			});


		}