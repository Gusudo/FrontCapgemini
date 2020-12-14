function HttpRequest() {

	this.post = function (url, data = null, contentType = null, processData = null, dataType = null) {

		var opts = {
			type: 'POST',
			data: data,
			url: url
		};

		if (contentType)
			opts.contentType = contentType;

		if (processData)
			opts.processData = processData;

		if (dataType)
			opts.dataType = dataType;	

		return $.ajax(opts).then(function (data) {
			return {
				data: data,
				status: 'ok'
			};
		}, function (error) {
			return {
				status: 'error',
				data: undefined,
				message: error.statusText
			};
		});
	}

	this.get = function (url, data = null, contentType = null, responseType = null) {

		var opts = {
			type: 'GET',
			data: data,
			url: url
		};

		if (contentType)
			opts.contentType = contentType;

		if (responseType)
			opts.responseType = responseType;


		return $.ajax(opts).then(function (resp) {
			return {
				resp: resp,
				status: 'success'
			};
		}, function (error) {
			return {
				status: 'error',
				message: error.statusText
			};
		});
	}
	
	this.upload = async function (url, data) {

		var opts = {
			method: "POST",
			url: url,
			data: data,
			enctype: 'multipart/form-data',
			cache: false,
			contentType: false,
			processData: false
		};

		return await $.ajax(opts).then(
			function (resp) {
				return {
					resp: resp,
					status: 'success'
				};
			},
			function (error) {
				var obj = { error: true, message: error.statusText };
				if (error.responseText != null && error.responseText != undefined)
					obj.responseText = JSON.parse(error.responseText);

				return obj;
			}
		);
	}
}