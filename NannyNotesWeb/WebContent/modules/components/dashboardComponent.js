angular.module("NannyNotesApp")
.component('dashboardComponent', {
	controller : function() {
	    var vm = this;
	  },
	 template : `
	 <div class="container">
	<h3>Sexy Sidebar Navigation<br />
        <small>A simple, sheek navigation bar style!</small>
    </h3>
    <br />
    
    <div class="row">
        <div class="col-sm-2">
            <nav class="nav-sidebar">
                <ul class="nav">
                    <li class="active"><a href="javascript:;">Home</a></li>
                    <li><a href="javascript:;">About</a></li>
                    <li><a href="javascript:;">Products</a></li>
                    <li><a href="javascript:;">FAQ</a></li>
                    <li class="nav-divider"></li>
                    <li><a href="javascript:;"><i class="glyphicon glyphicon-off"></i> Sign in</a></li>
                </ul>
            </nav>
        </div>
        <div class="col-sm-2 col-sm-offset-8">
        <nav class="nav-sidebar pull-right">
                <ul class="nav">
                    <li class="active"><a href="javascript:;">Home</a></li>
                    <li><a href="javascript:;">A long link will naturally wrap around</a></li>
                    <li class="text-overflow" title="An long link with .text-overflow"><a href="javascript:;">A link with .text-overflow can be applied in case it's too long!</a></li>
                    <li>
                        <a href="javascript:;" class="media">
                            <span class="pull-left">
                                <i class="media-object glyphicon glyphicon-list"></i>
                            </span>
                            <div class="media-body">
                                A media object can also be a link, making longer wrapping links play well with the icons!
                            </div>
                        </a>
                    </li>
                    <li class="text-overflow" title="Combine them all to make an awesome, safe solution!">
                        <a href="javascript:;" class="media">
                            <span class="pull-left">
                                <i class="media-object glyphicon glyphicon-list"></i>
                            </span>
                            <div class="media-body">
                                Combine them all to make an awesome, safe solution!
                            </div>
                        </a>
                    </li>
                    <li class="nav-divider"></li>
                    <li><a href="javascript:;"><i class="glyphicon glyphicon-off"></i> Sign in</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
		 		`
});