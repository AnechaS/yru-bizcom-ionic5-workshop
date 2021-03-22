<?php

namespace App\Middlewares;

class Cors {

    public function __invoke($request, $response, $next) {
        if (
            $request->isOptions() && 
            $request->hasHeader('Origin') && 
            $request->hasHeader('Access-Control-Request-Method')
        ) {
            return $response
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withHeader('Access-Control-Allow-Headers', '*')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        }

        $response = $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Expose-Headers', '*');
        
        return $next($request, $response);

    }
}