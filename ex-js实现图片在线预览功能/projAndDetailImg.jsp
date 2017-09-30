<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="sun.misc.BASE64Encoder"%>
<%@page import="java.io.File"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="java.io.FileNotFoundException" %>
<%@page import="java.io.BufferedInputStream" %>
<%@page import="java.io.ByteArrayOutputStream" %>

<%

	String photoUrl=request.getParameter("photoUrl");
	if(StringUtils.isNotBlank(photoUrl)){
		File file = new File(photoUrl);
		// File file=new File(photoUrl);
		if (file.exists()) {
			try (FileInputStream fis = new FileInputStream(file);
					BufferedInputStream bis = new BufferedInputStream(fis, 1024);
					ByteArrayOutputStream bos = new ByteArrayOutputStream(1024);) {
				byte[] cache = new byte[1024];
				int length = 0;
				while ((length = bis.read(cache)) != -1) {
					bos.write(cache, 0, length);
				}
				/**
				return bos.toByteArray();
				BASE64Encoder encoder = new BASE64Encoder();
				return encoder.encode(bos.toByteArray());
				**/
				response.getOutputStream().write(bos.toByteArray());
			}
		}
	}

%>



